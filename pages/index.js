import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../comp/nav";
import Banner from "../comp/banner";
import Tabs from "../comp/tabs";
import Select from "../comp/select";
import Images from "../comp/images";
export async function getStaticProps() {
  const data = await fetch(`https://api.pexels.com/v1/curated?page=1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "563492ad6f91700001000001c6264b9ee7b24e28815ec6153f31cd8a", //use the apikey you have generated
    },
  });
  const randomImage = await data.json();

  const tredingData = await fetch(`https://api.pexels.com/v1/curated?page=1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "563492ad6f91700001000001c6264b9ee7b24e28815ec6153f31cd8a", //use the apikey you have generated
    },
  });

  const trending = await tredingData.json();

  return {
    props: { randomImage, trending }, // will be passed to the page component as props
  };
}

export default function Home({ randomImage, trending }) {
  const image = randomImage.photos;
  const randomNumber = Math.floor(Math.random() * 10);
  const getRandomImage = image[randomNumber]?.src?.original;
  console.log(trending, "tredn");

  return (
    <>
      <Banner getRandomImage={getRandomImage} />
      <Tabs />
      <Select />
      <Images trending={trending} />
    </>
  );
}
