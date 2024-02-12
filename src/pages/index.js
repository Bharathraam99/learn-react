// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import Profile from "./components/profile";
import Profile2 from "./qcomps/profile_mistake";
import MyComp from "./qcomps/firstcomp";
import Bio from "./qcomps/bios";
import TodoList from "./qcomps/todos";
import PackingList from "./qcomps/props_item";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";
import Gallery from "./qcomps/gallery_props";
export default function Home() {
  return (
    <div className={styles.main}>
      <Profile />
      <Profile2 />
      <MyComp />
      <Bio />
      <TodoList />
      <Gallery/>
      <PackingList />
      <List />
      <RecipeList />
    </div>
  );
}
