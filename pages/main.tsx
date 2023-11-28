import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function main() {
  return (
    <div
      className="w-full text-white flex items-center justify-center bg-white h-screen bg-cover bg-[-20px_-10px] bg-no-repeat"
      style={{ backgroundImage: `url('/img/backdrop.svg')` }}
    >
      <Link className='mx-5' href={"/admin/register"}>
        <Button h={'fit-content'} textColor={'white'} bg={'red.600'} style={{ fontSize: "calc(2rem + 1vw)" }}>
          Admin
        </Button>
      </Link>
      <Link href={"/register"}>
        <Button h={'fit-content'} textColor={'white'}  bg={'blue.600'} style={{ fontSize: "calc(2rem + 1vw)" }}>
          User
        </Button>
      </Link>
    </div>
  );
}
