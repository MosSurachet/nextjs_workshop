"use client"

import Image from "next/image";
import Header from "./components/Header";
import Nav from "./components/Nav";
import styles from './styles/Button.module.css'
import styled from 'styled-components'
import './styles/main.scss'

const StyledComponent = styled.div`
  color:#333;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`

export default function Home() {
  return (
    <main >
      <Header />
      <Nav />
      <h3>Home Page</h3>
      <p>This is home page</p>
    </main>
  );
}
