import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, NavBar, Card, Space, Toast } from 'react-vant';
import styles from './index.module.scss';
import axios from 'axios';
import { dogListObject, DogSchema } from '../types';
import { Button, Flex } from 'antd';

interface Dog {
  id: string;
  name: string;
  age: string;
  sex: string;
  type: string;
  injection: boolean;
  photourl: string;
}

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dog, setDog] = useState<DogSchema | null>(null);
  const [permission, setPermission] = useState(
    localStorage.getItem('userType') === 'admin',
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id, navigate]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/dog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const dogs = dogListObject.parse(response.data);
      setDog(dogs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`, {
      state: {
        id: dog?._id,
        name: dog?.name,
        age: dog?.age,
        breed: dog?.breed,
        gender: dog?.gender,
        imageURL: dog?.imageURL,
      },
    });
  };

  const handleDel = async () => {
    try {
      const response = await axios
        .delete(`http://localhost:3000/dog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((resp) => {
          console.log(resp);
          Toast.info('Delete Dog!');
          navigate('/content');
        });
    } catch (error) {
      console.error('Create Error:', error);
    }
  };

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar title="Dog Detail" leftText='Back' onClickLeft={goBack} />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image style={{ width: 500, height: 500 }} src={dog.imageURL} />
        </div>
        <Card round className={styles.card}>
          {/* <Card.Header></Card.Header> */}
          <Card.Body>
            <p>Name: {dog.name}</p>
            <p>Age: {dog.age}</p>
            <p>Gender: {dog.gender}</p>
            <p>Breed: {dog.breed}</p>
          </Card.Body>
          <Card.Footer>
            <Space>
              <Button size="large" onClick={goBack}>
                Back
              </Button>
              {permission && (
                <Button size="large" onClick={handleEdit}>
                  Edit
                </Button>
              )}
              {permission && (
                <Button size="large" onClick={handleDel}>
                  Delete
                </Button>
              )}
            </Space>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Detail;
