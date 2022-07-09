import React from 'react'; 

import { 

  Chart as ChartJS, 

  CategoryScale, 

  LinearScale, 

  PointElement, 

  LineElement, 

  Title, 

  Tooltip, 

  Legend, 

} from 'chart.js';  

import { Line } from 'react-chartjs-2';  

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend); 

 export const options = { 

  responsive: true, 

  plugins: { 

    legend: { 

      position: 'top', 

    }, 

    title: { 

      display: true, 

      text: 'chuvas mm (fake data)', 

    }, 

  }, 

};  

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  

export const data = { 

  labels, 

  datasets: [ 

    { 

      label: 'Dataset 1', 

      data: [45, 20, 30, 50,80, 45, 20, 30, 50, 80], 

      borderColor: 'rgb(255, 99, 132)', 

      backgroundColor: 'rgba(255, 99, 132, 0.5)', 

    }, 

    { 

      label: 'Dataset 2', 

      data: [8, 76, 54, 34, 32, 43, 31, 15, 80], 

      borderColor: 'rgb(53, 162, 235)', 

      backgroundColor: 'rgba(53, 162, 235, 0.5)', 

    }, 

  ], 

};  

function Chartline() { 

  return ( 

  <Line options={options} data={data} /> 

  ); 

}  

export default Chartline 

import React from 'react' 

//import AllOutIcon from '@material-ui/icons/AllOut'; 

import AllOutIcon from '@mui/icons-material/AllOut'; 

import DoneAllIcon from '@mui/icons-material/DoneAll'; 

import ControlCameraIcon from '@mui/icons-material/ControlCamera'; 

import AnchorIcon from '@mui/icons-material/Anchor';  

const Style = "text-white text-xs"  

const arrayIcon = { 

                    0 : <AllOutIcon fontSize="small" className={Style} />,  

                    1 : <DoneAllIcon fontSize="small" className={Style} />,  

                    2 : <ControlCameraIcon fontSize="small" className={Style} />,  

                    3 : <AnchorIcon fontSize="small" className={Style} /> 

} 

const Color = { 

               0 : "from-indigo-600 to-blue-400",  

               1 : "from-blue-600 to-blue-300",  

               2 : "from-green-600 to-green-300",  

               3 : "from-yellow-600 to-yellow-300" 

}  

const Card = ({title, icon, balance}) => { 

        const gradientColor = Color[icon] ; 

        const iconStatus = arrayIcon[icon];  

    return ( 

        <div className={`transform hover:scale-110 cursor-pointer transition delay-100 w-full md:w-4/12 p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${gradientColor}`} >  

            <div className="flex justify-between"> 

                <div></div> 

                <div className=" w-7  h-3 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30"> 

                    {iconStatus} 

                </div> 

            </div> 

            <p className="text-gray-200 text-xs"> 

                {title} 

            </p> 

            <p className="text-gray-50 text-lg  font-semibold"> 

                {balance}  

            </p> 

            <p className="text-gray-300  text-sm "> 

            </p>  

        </div> 

    ) 

}  

export default Card 

import React from 'react' 

//import { withApiAuthRequired } from '@auth0/nextjs-auth0'  

import Sidebar from './sidebar' 

import Header from './header' 

import { useUser } from '@auth0/nextjs-auth0'  

import Link from 'next/link' 

import LoggingComponent from './loggingComponent'  

const Painel = (props) => { 

      //const {user , error , isLoading} = useUser(); 

      //import { useUser } from '@auth0/nextjs-auth0' 

      //if (isLoading) return <div>Loading...</div>; 

      //if (error) return <div>{error.message}</div>;       

      //if(user){ // auth0 bug, I am still don´t know why.   

          return ( 

            <div> 

                <div className="flex w-screen h-screen bg-gradient-to-tr from-transparent to to-blue-200"> 

                  <Sidebar/> 

                        <div className='w-screen'> 

                                <Header/> 

                                {props.children} 

                        </div> 

                </div> 

              </div> 

          )         

        //    return <LoggingComponent/> 

  }  

export default Painel 

//export const getServerSideProps = withApiAuthRequired(); 

import React from 'react' 

import { Line } from 'react-chartjs-2';  

const data = { 

    labels: ['|', '|', '|', '|', '|', '|', '|'], 

    datasets: [ 

        { 

            label: 'maxima dia', 

            fill: false, 

            lineTension: 0.1, 

            backgroundColor: 'rgba(220, 0, 0)', 

            borderColor: 'rgba(220, 0, 0)', 

            borderCapStyle: 'butt', 

            borderDash: [], 

            borderDashOffset: 0.0, 

            borderJoinStyle: 'miter', 

            pointBorderColor: 'rgba(220, 0, 0)', 

            pointBackgroundColor: 'rgba(220, 0, 0)', 

            pointBorderWidth: 1, 

            pointHoverRadius: 5, 

            pointHoverBackgroundColor: 'rgba(220, 0, 0)', 

            pointHoverBorderColor: 'rgba(220, 0, 0)', 

            pointHoverBorderWidth: 2, 

            pointRadius: 4, 

            pointHitRadius: 10, 

            data: [2, 3, 3, 2, 3, 1, 2] 

        }, 

        { 

            label: 'media dia', 

            fill: false, 

            lineTension: 0.1, 

            backgroundColor: 'rgba(67, 56, 202)', 

            borderColor: 'rgba(0, 0, 202)', 

            borderCapStyle: 'butt', 

            borderDash: [], 

            borderDashOffset: 0.0, 

            borderJoinStyle: 'miter', 

            pointBorderColor: 'rgba(120, 0, 0)', 

            pointBackgroundColor: '#fff', 

            pointBorderWidth: 1, 

            pointHoverRadius: 5, 

            pointHoverBackgroundColor: 'rgba(67, 56, 202)', 

            pointHoverBorderColor: 'rgba(220,0,0,1)', 

            pointHoverBorderWidth: 2, 

            pointRadius: 4, 

            pointHitRadius: 10, 

            data: [1, 3, 2, 1, 2, 1, 2] 

        }, 

        { 

            label: 'min dia', 

            fill: false, 

            lineTension: 0.1, 

            backgroundColor: 'rgba(247, 220, 111 )', 

            borderColor: 'rgba(247, 220, 111 )', 

            borderCapStyle: 'butt', 

            borderDash: [], 

            borderDashOffset: 0.0, 

            borderJoinStyle: 'miter', 

            pointBorderColor: 'rgba(247, 220, 111 )', 

            pointBackgroundColor: '#fffrgba(247, 220, 111 )', 

            pointBorderWidth: 1, 

            pointHoverRadius: 5, 

            pointHoverBackgroundColor: 'rgba(247, 220, 111 )', 

            pointHoverBorderColor: 'rgba(247, 220, 111 )', 

            pointHoverBorderWidth: 2, 

            pointRadius: 4, 

            pointHitRadius: 10, 

            data: [0, 1, 0, 2, 1, 2, 0] 

        } 

    ] 

};  

const Middle = () => { 

    return ( 

        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">  

            <div className="border-b p-3 border-gray-100"> 

                <p className="font-semibold  ">max-media-min por dia</p> 

            </div> 

            <div> 

                <Line data={data} /> 

            </div> 

        </div> 

    ) 

}  

export default Middle 

import React, { useEffect, useState } from 'react'  

import Card from './CCard' 

import Middle from './Midlle'  

import Chartline from './chartLine' 

import SensorWater from './sensorWater' 

import { info } from 'autoprefixer'  

const Container = () => { 

    const [data , setData ] = useState(); 

    const [aguaNivel , setAguaNivel]=useState(); 

    const [previsaoChuva , setPrevisaoChuva ]=useState(); 

    const [fluviometro , setFluviometro ]=useState();  

    const fetchData =async () => { 

            const dataApi = await fetch("https://tcc-group4.herokuapp.com/api/v8/sensors"); 

            //const dataApi = await fetch("http://localhost:8080/api/v8/sensors"); 

            const dataJson = await dataApi.json(); 

            console.log(data); 

            setData(dataJson); 

            /**/ 

            //setData(dataJson[0].wateLevel); 

            /* 

            console.log("dados da api."); 

            console.log(aguaNivel); 

            console.log(previsaoChuva); 

            console.log(fluviometro); 

            */ 

    }  

    useEffect(()=>{ 

        /**/ 

        setInterval(() => { 

            fetchData(); 

          }, 10000); 

    },[]);  

    return ( 

        <div className=" bg-gradient-to-b from-gray-100 to-blue-400 h-full " > 

            <div className="  px-8 py-1 ">  

                <p className="text-gray-500 text-lg"></p>  

                <p className="font-bold text-2xl transform -translate-y-2"></p> 

             </div>  

           { data ?   

           <div className="flex-wrap md:flex"> 

                {/* <Card title="Monitoramento inteligente" balance={data[0].id} icon={0}/> 

                <Card title="Regioes alargadas" balance={'0 ocorrencia'} icon={3}/> 

                <Card title="Fluviometro" balance={data[1].id} icon={2}/> */} 

                {data.map((element, index) => {			 

                    if(element.id == "fluviometro"){ 

                        return <Card key={element.id} title="Fluviometro" balance={element.fluviometro} icon={1}/>; 

                        }; 

                })}  

                {data.map((element, index) => {			 

                    if(element.id == "previsao_inteligente"){ 

                        return <Card key={element.id} title="Prev. intelig." balance={element.chuvaPrevisao} icon={2}/>; 

                        }; 

                })}  

                <Card title="Regioes alagadas" balance={'0 ocorrencia'} icon={3}/>   

            </div> : <h1>Carregando...</h1>}  

                        {/* flex  ml-3 mt-6 space-x-6  mr-4 */} 

            <div className="flex-wrap md:flex"> 

                {data ? 

                data.map((element, index) => {                     

                    if(element.id == "sensorAgua"){ 

                        return <SensorWater key={element.id} waterLevel={element.wateLevel}/>; 

                        }; 

                }): "" 

            } 

                <Middle/>                             

            </div> 

            <Chartline/>  

        </div> 

    ) 

}  

export default Container 

import React from 'react' 

import Link from 'next/link'  

const LoggingComponent = () => {  

const  isAnimated = false; 

  return ( 

    <div className={`text-7xl italic flex flex-col items-center justify-center h-screen w-full bg-cyan-400`}> 

        <Link href="/api/auth/login">Login</Link> 

    </div> 

  ) 

}  

export default LoggingComponent  

//animate-ping text-7xl italic flex flex-col items-center justify-center h-screen w-full bg-cyan-400 

import React from 'react'  

const Denvolvedores = () => { 

  return ( 

    <div className='text-4xl flex h-full flex-col items-center justify-center'>                 

                <div> 

                    <ul> 

                        <li>Carlos Jose Romão</li> 

                        <li>Fabiana Fernanda de Souza Bonfim</li> 

                        <li>Fabiano Pereira</li> 

                        <li>Marcelo Vizinhani Melo</li> 

                        <li>Octavio Correa de Araujo</li> 

                        <li>Thyago Silverio Menechini</li> 

                        <li>Valdevir Matos Ribeiro</li> 

                        <li></li> 

                    </ul> 

                </div> 

    </div> 

  ) 

}  

export default Denvolvedores 

import React from 'react'  

const SensorWater = ({waterLevel}) => {  

  const statusGradient = { 

    0 : ` bg-green-100`, 

    1 : ` bg-green-300`, 

    2 : ` bg-yellow-500`, 

    3 : ` bg-gradient-to-tr from-red-900 to-red-900 animate-ping ` 

  } 

// ${statusGradient[waterLevel]} 

  const statusColor = { 

    0 : ` bg-green-100`, 

    1 : ` bg-green-300`, 

    2 : ` bg-yellow-500`, 

    3 : ` bg-red-700 animate-ping` 

  } 

// ${statusColor[waterLevel]} 

  const textMessage = { 

    0 : `zero`, 

    1 : `LOW`, 

    2 : `MIDDLE`, 

    3 : `HIGH` 

  }  

  return (  

      <div className='text-3xl h-41 m-5 p-5 bg-gradient-to-tr from-cyan-100 to bg-slate-100'> 

        <hr/> 

          water sensor level 

          <br/> 

          <hr/> 

          <div className={`flex  

                            flex-col  

                            items-center  

                            justify-center  

                            h-[50%]  

                            m-10  

                            border-4 

                            rounded-full  

                            ${statusColor[waterLevel]} 

                            `}> 

            {textMessage[waterLevel]} 

          </div>  

    </div> 

  )//rounded-full h-40 bg-red-500 flex flex-col items-center justify-center 

}  

export default SensorWater 

import React from 'react' 

import ControlCameraIcon from '@mui/icons-material/ControlCamera'; 

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'; 

import Link from 'next/link';  

const Sidebar = () => { 

    return ( 

        <div className="md:w-3/12 w-2/12 h-screen shadow-2xl bg-white"> 

            <div className="flex m-7"> 

                <p className="text-lg md:text-4xl">Group</p> 

                <hr/> 

                <p className="text-lg md:text-4xl italic text-blue-700">4</p> 

                <hr className='bg-blue-900 '/>       

            </div> 

            <div className="p-4 space-y-14"> 

                <div className="space-y-4" > 

                    <h1 className="text-gray-400">Menu</h1>  

                    <Link href='/' > 

                    <div className=''> 

                        <div className="pt-8 flex p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer "> 

                                    <ControlCameraIcon /> 

                                    <div className="text-gray-600  " >Painel</div> 

                        </div> 

                    </div> 

                    </Link>  

                    <Link href='/about' > 

                    <div className=''> 

                        <div className="pt-8 flex p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer "> 

                                    <ControlCameraIcon /> 

                                    <div className="text-gray-600  " >Desenvolvedores</div> 

                        </div> 

                    </div> 

                    </Link>  

                    <Link href='/api/auth/logout'> 

                    <div className=''> 

                        <div className="pt-8 flex p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer "> 

                            <DisabledByDefaultIcon /> 

                        <div className="text-gray-600  " >Logout</div> 

                        </div> 

                    </div> 

                    </Link>  

                </div>                        

            </div>  

        </div> 

    ) 

}  

const Acoisa = ({title, }) =>{ 

    return( 

        <div className=''> 

        <div className="pt-8 flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer "> 

                    <ControlCameraIcon /> 

                    <Link href='/about' className="text-gray-600  " >{title}</Link> 

        </div> 

    </div> 

    ) 

}  

export default Sidebar 

import React from 'react' 

import DashboardIcon from '@mui/icons-material/Dashboard'; 

import CropIcon from '@mui/icons-material/Crop'; 

import AppRegistrationIcon from '@mui/icons-material/AppRegistration'; 

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'; 

import Link from 'next/link';  

const Header =() => { 

   return( 

    <div className="flex shadow-sm bg-white  p-4 justify-between h-xl">  

        <div className="flex space-x-3  "> 

            <p className='text-blue-800 text-xl md:text-4xl bold'>Sistema de alerta de Enchente</p> 

            <p className="text-gray-400 text-sm md:text-lg md:m-4">by Alunos univesp</p> 

            <CropIcon className="text-gray-300" /> 

            <DashboardIcon className="text-gray-300" /> 

        </div> 

        <Link href={"/api/auth/logout/"} className="hover:bg-teal-400"> 

            <div className="flex space-x-4 text-gray-400 mr-3"> 

                <AppRegistrationIcon /> 

                <DisabledByDefaultIcon /> 

                <p className="text-gray-600 font-semibold">|</p> 

            </div> 

        </Link>  

    </div> 

   ) 

}  

export default Header 
