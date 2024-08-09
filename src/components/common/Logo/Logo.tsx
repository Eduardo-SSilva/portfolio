import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <a href="#home">
        <Image
          src="/image/logo/logo.png"
          width={100}
          height={30}
          alt="Imagem do Logo da PJ de Eduardo"
        />
      </a>
    </>
  );
};
