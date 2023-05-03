import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/enhance.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import elevate from '../public/images/folds/elevate.png'
import resonates from '../public/images/folds/resonates.png'
import promote from '../public/images/folds/promote.png'
import convinced from '../public/images/folds/convinced2.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Brand from '@/components/Brand'
import Runner from '@/components/Runner'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonAuthor() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime txt-white mb-4 mt-5'>The Best Amazon <span className='d-block txt-prime fw-600'>Content Marketing Agency</span></h1>


    // ====== banner buttons ====== //
    const cta1 =
        <div className='bttns mt-3'>
            <Link className={`${styles.btnL} btons btns btnPrime`} href="#">
                <Image className='img-fluid chat' src={chat} alt='Amazon_Square' />
                Live Chat
            </Link>
            <Link className={`${styles.btnW} btons btns btnWhite`} href="#">
                <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                +1 (408) 689-7746
            </Link>
        </div>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-second txt-white mb-4'>
            HIRE AMAZON BOOK <br /> PUBLISHING EXPERTS <br /> TO EARN FAME IN DAYS
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            text: 'Are you looking for ways to improve the sales of your products on Amazon? Enhanced Brand Content/A+ Content is the best way to do so! Hire our Amazon content marketing agency today to make the most of this robust feature.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'enhanceBanner'
        }
    ]


    const runnerFold = [
        {
            title: 'What Makes Us a Better Choice for Amazon Author Page Optimization?',
            cardCount1: '01',
            cardHead1: 'Continuous Profile Updates',
            cardText1: 'We at Amazon Square specialize in developing compelling Amazon Author Pages.Being professionals, we produce custom pages for writers while ensuring that your page includes and highlights all of your published works available online. We also produce a captivating author bio to draw customers to your private online bookshop.',
            cardCount2: '02',
            cardHead2: 'Biography and About Us',
            cardText2: 'After you have published a few books, the community of readers will want to learn more about your portfolio. Therefore, we assist you in creating a biography and an About Us page to inform everyone about your published works and accomplishments. Our competent content developers manage your author`s profile page. We ensure your author profile includes all the vital information about you.',
            cardCount3: '03',
            cardHead3: 'Expert Author Page',
            cardText3: 'Our Amazon-exclusive profile writing services help us stand out amongst our competitors. We employ buzz phrases to engage the readers while enticing them to return for more information. We ensure that the author`s profile has all the pertinent information, including attention-grabbing details.',
            runner: 'runner'
        }
    ]


    const brandFold = [
        {
            subtitle: 'Elevate Your Selling to the Next Level with',
            title: 'Enhanced Brand Content',
            text1: 'Are you seeking ways to boost your items’ sales on Amazon? A+ Content, also known as Enhanced Brand Content, is the simplest way to do this. Get in touch with our Amazon content marketing company right away to start using this effective instrument. ',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: elevate,
            should: 'should'
        }
    ]


    const trafficFold = [
        {
            maintitle2: 'We Optimize for Both Humans and Machines!',
            subtitle: 'Ideal Content for Both Humans & Machines',
            title: 'Buyer-Centric Writing that Resonates With Your Brand`s Voice',
            text: 'Make the most of the brand registry and give the traditional FBA description a solid refurbishing to make your presence felt amongst the competitors with our Enhanced Brand Content services.',
            text1: 'The A+ Page represents the brand on Amazon. And we know you rely upon a professional company for creating the website of your business or graphics. Amazon Square is here to build EBC content as per your demands. We have experience creating 2000+ Amazon EBC designs from scratch, and we take pride in calling ourselves "Pros.',
            text2: 'We have a team of creative designers and excellent copywriters with the skills required to develop high-quality Amazon A+ design that converts visitors into customers and beat the competition. Hiring our Amazon content marketing services will offer you peace of mind knowing that you will receive the highest quality of service within the time frame agreed upon.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: resonates,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: promote,
            subtitle: 'Content Strategizing is a Great',
            title: 'Choice For Sellers to Promote',
            subtitle1: 'Products by Conveying The Compelling Benefits.',
            subtitle2: 'Jake Marcus',
            subtitle3: 'VP – Marketing Operations',
            should: 'should'
        }
    ]


    const convincedFold = [
        {
            title: convTitle,
            text: 'We will help the writers to overcome the hassle with our result-oriented approach. Over the years, we have assisted writers helping them to get approved on Amazon and publish their books the right way.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: convinced,
            convinced: 'convinced'
        }
    ]


    return (
        <>
            <Head>
                <title>Amazon Square</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>

            {/* ========= Banner ========= */}

            {bannertext.map((item, i) =>
                <Banner key={i}
                    title={item.title}
                    text={item.text}
                    discuss={item.discuss}
                    imageban={item.imageban}
                    banner={item.banner}
                />
            )}


            {/* ========= ContactFold ========= */}

            <ContactFold />


            {/* ========= AccessFold ========= */}

            {brandFold.map((item, i) =>
                <Brand key={i}
                    subtitle={item.subtitle}
                    title={item.title}
                    text1={item.text1}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    alignclass={item.alignclass}
                    should={item.should}
                />
            )}


            {/* ========= Runner ========= */}

            {runnerFold.map((item, i) =>
                <Runner key={i}
                    title={item.title}
                    cardCount1={item.cardCount1}
                    cardHead1={item.cardHead1}
                    cardText1={item.cardText1}
                    cardCount2={item.cardCount2}
                    cardHead2={item.cardHead2}
                    cardText2={item.cardText2}
                    cardCount3={item.cardCount3}
                    cardHead3={item.cardHead3}
                    cardText3={item.cardText3}
                    runner={item.runner}
                />
            )}


            {/* ========= Promote ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtitle1={item.subtitle1}
                    subtitle2={item.subtitle2}
                    subtitle3={item.subtitle3}
                    should={item.should}
                />
            )}


            {/* ========= Clients ========= */}

            <Clients />


            {/* ========= Centric ========= */}

            {trafficFold.map((item, i) =>
                <Traffic key={i}
                    maintitle2={item.maintitle2}
                    subtitle={item.subtitle}
                    title={item.title}
                    text={item.text}
                    text1={item.text1}
                    text2={item.text2}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    should={item.should}
                />
            )}


            {/* ========= Excellent ========= */}

            {convincedFold.map((item, i) =>
                <Convinced key={i}
                    title={item.title}
                    text={item.text}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    convinced={item.convinced}
                />
            )}


            {/* ========= Testimonial ========= */}

            <Testimonial />
        </>
    )
}
