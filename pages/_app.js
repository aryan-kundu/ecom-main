import "@/styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar'


export default function App({ Component, pageProps }) {
  const router=useRouter()
  const [totalAmount,settotalAmount]=useState(0);
  const [cart, setCarts] = useState({});
  const [user,setUser]=useState({value:null})
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    if(localStorage.getItem('cart')){
      try {
        setCarts(JSON.parse(localStorage.getItem('cart')))
        savecart(JSON.parse(localStorage.getItem('cart')))
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
      const token=localStorage.getItem('token');
      if(token){
        setUser({value:token})
        setKey(Math.random());
      }
    }
    
  }, [router.query])

  const logout=()=>{
    localStorage.removeItem('token')
    setUser({value:null})
    setKey(Math.random());
  }
  

  const savecart=(mycart)=>{
    localStorage.setItem("cart",JSON.stringify(mycart))
    const keys= Object.keys(mycart);
    let subt=0
    for(let i=0;i<keys.length;i++){
      subt+=mycart[keys[i]].price*mycart[keys[i]].qty
    }
    settotalAmount(subt);
  }

  const addToCart=(itemCode,qty, price, name, size, variant)=>{
    const mycart=cart;
    if(itemCode in mycart){
      mycart[itemCode].qty=mycart[itemCode].qty +qty;
    }
    else{
      mycart[itemCode]={qty:1,price, name, size, variant}
    }
    setCarts(mycart);
    savecart(mycart);
  }

  const removeFromCart=(itemCode,qty, price, name, size, variant)=>{
    const newCart=cart;
    if(itemCode in newCart){
      newCart[itemCode].qty=newCart[itemCode].qty-qty;
    }
    if(newCart[itemCode].qty <=0){
      delete newCart[itemCode];
    }
    setCarts(newCart);
    savecart(newCart);
  }


  const clearCart=()=>{
    setCarts({});
    savecart({});
  }

  const buyNow=(itemCode,qty, price, name, size, variant)=>{
    
    const mycart={};
    if(itemCode in mycart){
      mycart[itemCode].qty=mycart[itemCode].qty +qty;
    }
    else{
      mycart[itemCode]={qty:1,price, name, size, variant}
    }
    setCarts(mycart);
    savecart(mycart);
    router.push("/checkout")

  }

  return (
    <>
    <LoadingBar
        color='#f11946'
        waitingTime={500}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar user={user} logout={logout} key={key}   addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} totalAmount={totalAmount} />
      <Component {...pageProps}   addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} totalAmount={totalAmount} buyNow={buyNow} />
      <Footer key={totalAmount}/>
    </>
  )
}
