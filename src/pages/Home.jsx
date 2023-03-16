import {
  Title,
  DevelopedBy,
  LinkIconsList,
} from '../components/Home/Home.styled';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <Title>Welcome to Phonebook service</Title>
      <DevelopedBy>Developed by </DevelopedBy>
      <LinkIconsList>
        <li>
          <a href=" ">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href=" ">
            <BsLinkedin />
          </a>
        </li>
      </LinkIconsList>
    </>
  );
};

export default Home;