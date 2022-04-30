import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import DriverCard from "../components/DriverCard";

const dataDriver = {
  gender: "male",
  name: {
    title: "Mr",
    first: "Oskari",
    last: "Annala"
  },
  location: {
    street: {
        number: 1963,
        name: "Pirkankatu"
    },
    city: "Laihia",
    state: "North Karelia",
    country: "Finland",
    postcode: 27645,
    coordinates: {
        latitude: "26.6787",
        longitude: "-88.0394"
    },
    timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima"
    }
  },
  email: "oskari.annala@example.com",
  login: {
    uuid: "9d052d7d-b1a5-4702-bd10-9fdd89ef0471",
    username: "blackbear554",
    password: "whitesox",
    salt: "ZrrNMqDt",
    md5: "a758668e1c7d65adda78d0808d5c3c95",
    sha1: "d1eb22149dc9202fe20a3a6f021ba19efc72568c",
    sha256: "fc9faa61c62a9f7c17bef5e569e8966fe6ec2d8b136680dffc6805ad758facd6"
  },
  dob: {
    date: "1996-05-20T19:23:45.758Z",
    age: 26
  },
  registered: {
    date: "2018-02-04T05:59:20.242Z",
    age: 4
  },
  phone: "02-780-022",
  cell: "042-866-04-35",
  id: {
    name: "HETU",
    value: "NaNNA345undefined"
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/18.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg"
  },
  nat: "FI"
}

test('render driver id', () => {
  render(
    <DriverCard driver={dataDriver}/>
  );
  const text = screen.getByText('Driver ID');
  expect(text).toBeInTheDocument();
});

test('render nama driver', () => {
  render(
    <DriverCard driver={dataDriver}/>
  );
  const text = screen.getByText('Nama Driver');
  expect(text).toBeInTheDocument();
});

test('render telepon', () => {
  render(
    <DriverCard driver={dataDriver}/>
  );
  const text = screen.getByText('Telepon');
  expect(text).toBeInTheDocument();
});

test('render email', () => {
  render(
    <DriverCard driver={dataDriver}/>
  );
  const text = screen.getByText('Email');
  expect(text).toBeInTheDocument();
});

test('render tanggal lahir', () => {
  render(
    <DriverCard driver={dataDriver}/>
  );
  const text = screen.getByText('Tanggal Lahir');
  expect(text).toBeInTheDocument();
});