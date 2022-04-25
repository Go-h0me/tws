import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
import { animated, useSpring } from 'react-spring'

const Content = () => {



    const customer = useSpring({ customers: 10245, from: { customers: 0 } })
    
    const card =useSpring({cards:12045,from:{cards:0}})
    
    return (
        <section className="md:flex md:flex-row ">
            <div className="ml-[70px] mr-[54px] text-bold flex items-center
            bg-gradient-to-b from-white/40 to-transparent shadow-md
            rounded-[24px] flex-col md:w-[20%] bg-purple-500

            ">
                <div className="mt-16 gap-8 flex items-start">
                    <FaUser size={"22px"} className="mt-[12px]" />
                    <div className='text-26'>
                        <animated.div>
                            {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className='text-13 md:text-16 font-semibold mb-[36px]'>
                            Customers
                        </p>
                    </div>
                </div>

                <div className='gap-8 flex items-start mb-16 '>
                    <BsFillCreditCardFill size={"22px"} className="mt-[12px] " />
                    <div className='text-26'>
                        <animated.div>

                        {card.cards.to((val) => Math.floor(val))}
                            </animated.div>

                        <p className='text-13 md:text-16 font-semibold'>Cards Issued</p>
                    </div>
                </div>
            </div>
            
            <div className='md:mt-0 md:w-[30%] md:text-16 md:ml-[20%] text-13 flex flex-col w-[100%] mt-[90px] font-semibold'>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p>Not think easy</p>
                </div>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p>Never give up</p>
                </div>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p>Target in line</p>
                </div>

            </div>
        </section>
    )
}

export default Content

