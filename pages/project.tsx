import React,{useState, useEffect, useRef} from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import FollowCursor from './components/FollowerCursor'
import Header from './components/Header'
import DotText from './components/DotText'
import HorizontalText from './components/HorizontalText'
import RisingAnimationText2 from './components/RisingAnimationText2'
import RisingAnimationText3 from './components/RisingAnimationText3'
import RisingAnimationText from './components/RisingAnimationText'
import HoverEffectOnImage from './components/HoverEffectOnImage'
import RisingAnimationDiv from './components/RisingAnimationDiv'
import SmoothScroll from './components/SmoothScroll'
import DivisionLine from './components/DivisionLine'
import Landing from './components/Landing'
import { motion } from "framer-motion";
import TweenLite ,{gsap} from 'gsap'
import {CustomEase} from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
const color1 = '#000'
const color2 = '#e2e2e2'

const Home: NextPage = () => {  
  const [isDark, setDark] = useState(true) 
  const swiperImages = useRef<HTMLHeadingElement>(null);
  const textOne = useRef<HTMLHeadingElement>(null);
  const buttonOne = useRef<HTMLButtonElement>(null)
  const footer = useRef<HTMLHeadingElement>(null)
  const letswork = useRef<HTMLHeadingElement>(null)  

  const changeDarkTheme = (value:boolean) => {
    localStorage.setItem('dark', value?'1':'0')
    setDark(value)
  }
  
  function AnimationText(){

    CustomEase.create("cubic-bezier", ".19,1,.22,1")
    gsap.to(swiperImages.current, 1, { y:0, opacity:1, ease: 'cubic-bezier', delay:3.1});
    
    let animations = document.getElementsByClassName('animation-text1')

    if (animations.length > 0) {
      for (let i = 0; i < animations.length; i++) {
        let animation = animations[i]
        gsap.to(animation, 1, { top: 0, ease: 'cubic-bezier', delay: (2.5 + (i / 4)) });
      }
    }
  }

  useEffect(() => {    
    if(typeof window !== "undefined"){
      AnimationText();
    }
 
    window.addEventListener("scroll" , () => {
      const clientHeight = document.documentElement.clientHeight;
      CustomEase.create("cubic-bezier", ".19,1,.22,1")
      if (buttonOne.current){
        const buttonOneSectionY = buttonOne.current.getBoundingClientRect().y;
        const buttonOneSectionheight = buttonOne.current.getBoundingClientRect().height;

        if (clientHeight > buttonOneSectionY + (buttonOneSectionheight * 2) / 3) {
          gsap.to(buttonOne.current, 1, { opacity: 1, y: 0, ease: 'cubic-bezier' })
        }
      }

      if (footer.current){
        const footerSectionY = footer.current.getBoundingClientRect().y;
        const footerSectionheight = footer.current.getBoundingClientRect().height;
        if (clientHeight > footerSectionY - (footerSectionheight* 2) / 3) {
          gsap.to(footer.current, 1, { y: 0, ease: 'cubic-bezier', delay:1 })
        }
      }

      if (letswork.current){
        const letsworkSectionY = letswork.current.getBoundingClientRect().y;
        const letsworkSectionheight = letswork.current.getBoundingClientRect().height;
        if (clientHeight > letsworkSectionY + (letsworkSectionheight* 2) / 3) {
          if (letswork.current.children.length > 0) {
            for (let i = 0; i < letswork.current.children.length; i++) {
              let animation = letswork.current.children[i]
              gsap.to(animation, 1, {opacity: 1, y: 0, ease: 'cubic-bezier', delay: (0.5 + (i / 4)) });
            }
          }
        }
      }
      
    });

    var studioDark = localStorage.getItem('dark')
    if(studioDark===null){
      localStorage.setItem('dark','1')
    }else{
      setDark(studioDark==='1')
    }
  }, [])

  const buttonOverIn = () =>{
    let cursor = document.getElementById('cursor')
    gsap.to(cursor, { scale:3, opacity:0.3});
  }

  const buttonOverOut = () =>{    
    let cursor = document.getElementById('cursor')
    gsap.to(cursor, { scale:1, opacity:1});    
  }

  const allow =
    <svg width="30" height="15" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="28" height="13" rx="6.5" fill={isDark?"#FF5C00":"#001AFF"} stroke={isDark?"#FF5C00":"#001AFF"} strokeWidth="2"/>
      <path className="arrow" fillRule="evenodd" clipRule="evenodd" d="M6.32812 7.96875V7.03125L23.2031 7.03125V7.96875L6.32812 7.96875Z" fill="white"/>
      <rect className="arrow" width="5.625" height="0.9375" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 20.1172 11.4844)" fill="white"/>
      <rect className="arrow" width="5.625" height="0.9375" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.0938 7.49316)" fill="white"/>
    </svg>

  const animation = {
    exit : {
      y: 250,
      transition: {
        duration: 1,
        ease: [.19,1,.22,1]
      }
    },
    exitTwo : {
      y: 250,
      opacity:0,
      transition: {
        duration: 1,
        ease: [.19,1,.22,1]
      }
    },
  }

  return (
    <>
      <Head>
        <title>Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
      <SmoothScroll bkgroundColor={isDark?color1:color2} foreColor={isDark?color2:color1}>
        <div className="main-wrapper">
          <Header/>
          <motion.div exit='exit' className="content">
            
            <section className="sm:mb-[0px] md:mb-[150px] lg:mb-[0px] text-[50px] sm:text-[53px] md:text-[62px] lg:text-[85px] xl:text-[97px] leading-[50px] md:leading-[100px]">
              <motion.div  ref={textOne} className="mt-20 sm:mt-32">
                <div className='animation-mask'>
                  <motion.p variants={animation} className="animation-text1 text-center w-full" >Project</motion.p>
                </div>

                <div className='text-14 w-full sm:w-[500px] mx-auto mt-16 sm:mt-36'>
                  <DotText scrollAnimation={true} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'}/>
                </div>
              </motion.div>
            </section>
            
            <section className="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[636px] mt-12 sm:mt-20 mb-15">
              <motion.section exit='exitTwo' variants={animation}  style={{opacity:0, transform:"translate(0,200px)"}} ref={swiperImages}
                className="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[636px] mt-12 sm:mt-20 mb-15">
                <HoverEffectOnImage url="/img/projects/01.png" width='1440px' height='636px'/>
              </motion.section>
            </section>

            <div className='mt-14'>
              <DivisionLine color={'#FF5C00'}/>
            </div>            
            
            <section className="w-full h-full">
              <RisingAnimationText animateName="project-text-animate0">
                <div className='flex justify-between text-20 mt-2'>
                  <div className='relative overflow-hidden h-[25px] w-[140px]'>
                    <motion.p variants={animation} className="project-text-animate0 absolute top-[100px] left-0" >PROJECT</motion.p>
                  </div> 
                  <div className='relative overflow-hidden h-[25px] w-[140px]'>
                    <motion.p variants={animation}  className="project-text-animate0 absolute top-[100px] left-0" >PROJECT.COM</motion.p>
                  </div>
                </div>
              </RisingAnimationText>
            </section>
            
            <section className="hidden sm:block w-full h-full mt-28 text-[60px]">
              <RisingAnimationText animateName="project-text-animate1">
                <div className='relative overflow-hidden h-[70px]'>
                  <motion.p variants={animation} className="project-text-animate1 absolute top-[100px] left-0" >Lorem ipsum dolor sit amet,</motion.p>
                </div>
                <div className='relative overflow-hidden h-[70px]'>
                  <motion.p variants={animation}  className="project-text-animate1 absolute top-[100px] left-0" >consectetur adipiscing elit, sed</motion.p>
                </div>
                <div className='relative overflow-hidden h-[70px]'>
                  <motion.p variants={animation}  className="project-text-animate1 absolute top-[100px] left-0" >do eiusmod tempor incididunt.</motion.p>
                </div>
              </RisingAnimationText>
            </section>
            <section className="sm:hidden w-full h-full mt-28 text-[50px]">
              <RisingAnimationText animateName="project-mobile-text-animate1">
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation} className="project-mobile-text-animate1 absolute top-[100px] left-0" >Lorem ipsum</motion.p>
                </div>
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation}  className="project-mobile-text-animate1 absolute top-[100px] left-0" >dolor sit amet,</motion.p>
                </div>
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation}  className="project-mobile-text-animate1 absolute top-[100px] left-0" >consectetur</motion.p>
                </div>
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation} className="project-mobile-text-animate1 absolute top-[100px] left-0" >adipiscing elit,</motion.p>
                </div>
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation}  className="project-mobile-text-animate1 absolute top-[100px] left-0" >sed do eiusmod</motion.p>
                </div>
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation}  className="project-mobile-text-animate1 absolute top-[100px] left-0" >tempor</motion.p>
                </div>
                <div className='relative overflow-hidden h-[60px]'>
                  <motion.p variants={animation}  className="project-mobile-text-animate1 absolute top-[100px] left-0" >incididunt.</motion.p>
                </div>
              </RisingAnimationText>
            </section>
            
            <section className='grid grid-cols-1 sm:grid-cols-2 mt-32'>

              <RisingAnimationText animateName="project-text-animate2">
                <div className='relative overflow-hidden h-[25px] text-20 mt-16'>
                  <motion.p variants={animation} className="project-text-animate2 absolute top-[100px] left-0" >Rapid Product</motion.p>
                </div>
                <div className='relative overflow-hidden h-[25px] text-20'>
                  <motion.p variants={animation}  className="project-text-animate2 absolute top-[100px] left-0" >Prototyping</motion.p>
                </div>
                <div className='relative overflow-hidden h-[25px] text-20'>
                  <motion.p variants={animation}  className="project-text-animate2 absolute top-[100px] left-0" >Information Architecture</motion.p>
                </div>
                <div className='relative overflow-hidden h-[25px] text-20'>
                  <motion.p variants={animation}  className="project-text-animate2 absolute top-[100px] left-0" >User Interface</motion.p>
                </div>
              </RisingAnimationText>

              <div>
                <RisingAnimationText animateName="project-text-animate3">
                  <div className='relative overflow-hidden h-[40px] text-[30px]'>
                    <motion.p variants={animation} className="project-text-animate3 absolute top-[100px] left-0" >About</motion.p>
                  </div>

                  <div className='relative overflow-hidden h-[32px] text-[26px] mt-10'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</motion.p>
                  </div>
                  <div className='relative overflow-hidden h-[32px] text-[26px]'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >do eiusmod tempor incididunt ut labore et dolore magna</motion.p>
                  </div>
                  <div className='relative overflow-hidden h-[32px] text-[26px]'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >aliqua. Ut enim ad minim veniam, quis nostrud exercitation</motion.p>
                  </div>
                  <div className='relative overflow-hidden h-[32px] text-[26px]'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                  </div>

                  <div className='relative overflow-hidden h-[32px] text-[26px] mt-10'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</motion.p>
                  </div>
                  <div className='relative overflow-hidden h-[32px] text-[26px]'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >do eiusmod tempor incididunt ut labore et dolore magna</motion.p>
                  </div>
                  <div className='relative overflow-hidden h-[32px] text-[26px]'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >aliqua. Ut enim ad minim veniam, quis nostrud exercitation</motion.p>
                  </div>
                  <div className='relative overflow-hidden h-[32px] text-[26px]'>
                    <motion.p variants={animation}  className="project-text-animate3 absolute top-[100px] left-0" >ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                  </div>
                </RisingAnimationText>

                <RisingAnimationDiv classes="mt-28">
                  <div className='flex justify-start'>
                    <div className='text-white flex justify-center items-center relative w-auto'>
                      <img src='img/maskLeft.png' style={{height:'100%', display:isDark?'block':'none'}} className="absolute top-0 left-[0px] z-10 pointer-events-none"/>
                      <img src='img/maskleftlight.png' style={{height:'100%', display:isDark?'none':'block'}} className="absolute top-0 left-[0px] z-10 pointer-events-none"/>
                      <Link scroll={false} href="/about">

                      <button ref={buttonOne} style={{opacity:0, transform:"translate(0,200px)"}}  className={isDark?"animation-button border-gray-700 mx-[1px]":"animation-button blue-button border-gray-700 mx-[1px]"}
                        onMouseMove={buttonOverIn} onMouseLeave={buttonOverOut}>
                        <div className='btn-content h-[70px]' style={{color:isDark?'white':'black'}}>
                          <div className='btn-content-group'>
                            <div className='mx-2 text-16'>VISIT WEBSITE</div><div className='mx-2'>{allow}</div>
                          </div>
                        </div>            
                      </button>
                      </Link>
                      
                      <img src='img/maskRight.png' style={{height:'100%', display:isDark?'block':'none'}} className="absolute top-0 right-[0px] z-10 pointer-events-none"/>
                      <img src='img/maskrightlight.png' style={{height:'100%', display:isDark?'none':'block'}} className="absolute top-0 right-[0px] z-10 pointer-events-none"/>
                    </div>
                  </div>
                </RisingAnimationDiv>

              </div>
            </section>
            
            <div className='mt-40'>
              <DivisionLine color={'white'}/>
            </div>
            
            <section className="py-12">
              <RisingAnimationText animateName="project-text-animate4">
                <div className='grid grid-cols-1 sm:grid-cols-4'>
                  <div className='text-[30px] leading-8'>
                    <div className='relative overflow-hidden h-[74px]'>
                      <motion.p variants={animation} className="project-text-animate4 absolute top-[100px] left-0" >SERVICES<br/>USED</motion.p>
                    </div>
                  </div>
                  
                  <div className='text-20'>
                    <div className='relative overflow-hidden h-[140px]'>
                      <motion.p variants={animation} className="project-text-animate4 absolute top-[100px] left-0" >
                        Rapid Product<br/>
                        Prototyping<br/>
                        Information Architecture<br/>
                        User Interface<br/>
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className='text-20'>
                    <div className='relative overflow-hidden h-[140px]'>
                      <motion.p variants={animation} className="project-text-animate4 absolute top-[100px] left-0" >
                        Graphic Design<br/>
                        Brand Identity<br/>
                        Content Creation<br/>
                        Motion Design<br/>
                        Art Direction<br/>
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className='text-20'>
                    <div className='relative overflow-hidden h-[140px]'>
                      <motion.p variants={animation} className="project-text-animate4 absolute top-[100px] left-0" >
                        Graphic Design<br/>
                        Brand Identity<br/>
                        Content Creation<br/>
                        Motion Design<br/>
                        Art Direction<br/>
                      </motion.p>
                    </div>
                  </div>

                </div>
              </RisingAnimationText>
            </section> 

            <section className="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[772px] mt-12 mb-15">
              <RisingAnimationDiv classes="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[772px] mt-12 mb-15">
                <HoverEffectOnImage url="/img/projects/02.png" width='1440px' height='772px'/>
              </RisingAnimationDiv>
            </section>
            
            
            <section className="w-full h-full mt-52 text-[76px] leading-[80px]">
              <RisingAnimationText animateName="project-text-animate5">
                <div className='relative overflow-hidden h-[84px]'>
                  <motion.p variants={animation} className="project-text-animate5 absolute top-[100px] left-0" >&nbsp;&nbsp;&nbsp;&nbsp;“Lorem ipsum dolor sit amet,</motion.p>
                </div>
                <div className='relative overflow-hidden h-[84px]'>
                  <motion.p variants={animation}  className="project-text-animate5 absolute top-[100px] left-0" >consectetur adipiscing elit,</motion.p>
                </div>
                <div className='relative overflow-hidden h-[84px]'>
                  <motion.p variants={animation}  className="project-text-animate5 absolute top-[100px] left-0" >sed do eiusmod tempor</motion.p>
                </div>
                <div className='relative overflow-hidden h-[84px]'>
                  <motion.p variants={animation}  className="project-text-animate5 absolute top-[100px] left-0" >incididunt ut labore et dolore”</motion.p>
                </div>
              </RisingAnimationText>
            </section>

            <section className="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[745px] mt-12 sm:mt-20 mb-15">
              <RisingAnimationDiv classes="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[745px] mt-12 sm:mt-20 mb-15">
                <HoverEffectOnImage url="/img/projects/03.png" width='1440px' height='745px'/>
              </RisingAnimationDiv>
            </section>
            
            <section className="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[636px] mt-12 sm:mt-20 mb-15">
              <RisingAnimationDiv classes="w-full md:w-[1440px] md:mx-auto h-[236px] sm:h-[636px] mt-12 sm:mt-20 mb-15">
                <HoverEffectOnImage url="/img/projects/01.png" width='1440px' height='636px'/>
              </RisingAnimationDiv>              
            </section>

            <div className='w-full h-60'></div>

            <motion.section animate={{transition:{staggerChildren: 0.5}}} className="horizontal-section" >
              <div className='w-full max-w-[1440px] mx-auto text-14 flex justify-end' style={{marginRight:'calc( ( 100vw - 1400px )/2)'}}>
                <DotText scrollAnimation={true} leftalign={false} text="SELECT PROJECTS" />
              </div>
              <div className="h-[16px] md:h-[30px]"></div>
              <HorizontalText step={-2.1} text="VICIS PRO /" url={'img/img00.jpg'} index={0} />
              <HorizontalText step={ 2.1} text="OPEN FORMAT /" url={'img/img01.jpg'} index={1} />
              <HorizontalText step={-1.2} text="BLUEPRINT PHOENIX /" url={'img/img02.jpg'} index={2} />
              <HorizontalText step={ 1.2} text="TWELVES /" url={'img/img03.jpg'} index={3} />
              <HorizontalText step={-3.3} text="CROOKS&CASTLES /" url={'img/img04.jpg'} index={4} />
              <HorizontalText step={ 3.3} text="JASON MARKK /" url={'img/img05.jpg'} index={5} />
            </motion.section>
            
            <section id='footer'>
              <section className="mt-[110px] md:mt-[250px]  mb-[110px]">
                <RisingAnimationText3 isDark={isDark}/>
                <div className="h-10 md:hidden"/>
                <div className="w-full flex justify-end md:mt-4">
                  <div className="hidden md:block text-16 w-[400px] mr-[150px]">
                    <DotText scrollAnimation={true} leftalign={false} text="For new and established businesses alike, we specialize in building and managing your eCommerce store with confidence."/>
                  </div>
                  <div className="text-14 w-full px-8 md:hidden">
                    <DotText scrollAnimation={true} leftalign={false} text="For new and established businesses alike, we specialize in building and managing your eCommerce store with confidence."/>
                  </div>
                </div>
              </section>

              <motion.section variants={animation} exit="exitTwo" ref={letswork} className="md:flex justify-between items-center">
                <div style={{opacity:0, transform:"translate(0,200px)"}} className="flex items-center justify-center md:justify-start">
                  <div className='text-white flex justify-center items-center relative mx-4 md:ml-16'>
                    <img src='img/maskLeft.png' style={{height:'100%', display:isDark?'block':'none'}} className="absolute top-0 left-[0px] z-10 pointer-events-none"/>
                    <img src='img/maskleftlight.png' style={{height:'100%', display:isDark?'none':'block'}} className="absolute top-0 left-[0px] z-10 pointer-events-none"/>
                    <button className={isDark?"animation-button mx-[1px]":"animation-button blue-button mx-[1px]"} onClick={() => changeDarkTheme(!isDark)}
                      style={{border:isDark?'solid 3px #FF5C00':'solid 3px #0019FF'}} onMouseMove={buttonOverIn} onMouseLeave={buttonOverOut}
                    >
                      <div className='btn-content' style={{height:'56px !important', color:isDark?'white':'black'}}>
                        <div className='btn-content-group mx-4 text-[32px]'>
                          Dark/Light
                        </div>
                      </div>            
                    </button>
                    <img src='img/maskRight.png' style={{height:'100%', display:isDark?'block':'none'}} className="absolute top-0 right-[0px] z-10 pointer-events-none"/>
                    <img src='img/maskrightlight.png' style={{height:'100%', display:isDark?'none':'block'}} className="absolute top-0 right-[0px] z-10 pointer-events-none"/>
                  </div>
                  <p className="text-14 ml-12 hidden md:block ">DESIGN STUDIO<br/>LOS ANGELES</p>  
                </div>
                <p style={{opacity:0, transform:"translate(0,200px)"}} className="text-14 text-center mt-4 md:hidden pr-16">DESIGN STUDIO<br/>LOS ANGELES&nbsp;&nbsp;&nbsp;</p>  
                <div className="h-[75px] md:hidden"/>
                <p style={{opacity:0, transform:"translate(0,200px)"}} className="text-14 md:ml-6 text-center md:text-left">2022© STUDIO LLC. All Rights Reserved.</p>  
              </motion.section>

              <motion.section  variants={animation} exit="exit" className="flex justify-center items-center -mx-16 pt-[100px] h-[120px] md:h-[120px] overflow-hidden">
                <p ref={footer} style={{transform:"translate(0,200px)"}} className="text-[180px] md:text-[240px] font-bold text-center mt-4">STUDIO©</p>  
              </motion.section>
            </section>
            
          </motion.div>        
        </div>
      </SmoothScroll>

      <div className="hidden md:block"><FollowCursor/></div>
      
    </>
  )
}
export default Home