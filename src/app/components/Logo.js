import Image from "next/image"

export default function Logo() {
  return (
    <Image src='/logo.svg' width={60} height={60} alt='Logo' />
  )
}
