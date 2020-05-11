import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './Components/Display';
import Datchi from './Components/Datchi';

function App() {
  const[eat, setEat] = useState("");
  const[play, setPlay] = useState("");
  const[sleep, setSleep]=useState("");
  const[work, setWork]= useState("");
  const[meal, setMeal]= useState(3);
  const[img, setImg] = useState("https://media0.giphy.com/media/IaWMz9Ln8OWvf66z6k/source.gif");
  const[fullness, setFullness] = useState(20);
  const[happiness, setHappiness] = useState(20);
  const[energy, setEnergy] = useState(50);
  const[msg, setMsg] = useState("Welcome to Yoda Datchi");
  
  

  const handleEat = (e) => {
    e.preventDefault();
    var cmeal = setMeal(e.target.value);
    var x = setFullness(e.target.value);
    if (meal < 1){
      setFullness(fullness);
      setMeal(meal);
      setMsg("Sorry no free meals around here! To work go! Hrmmm.")
      setImg("https://media1.giphy.com/media/Mdj8GNWKrvH3FzLbWV/200w.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=200w.webp")
      // alert("Sorry no free meals around here! To work go! Hrmmm.")
    }else{
      setMeal(meal- 1);
      let chance = Math.floor(Math.random() * 5);
      if (chance === 1){
        setFullness( fullness - 5);
        setMsg("Terrible!! Hrmmm... Good try this meal was.")
        setImg("https://media0.giphy.com/media/kI2hsMDS4zjK7Fbif8/100.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=100.webp")
        
      }else{
        let f = Math.floor(Math.random() * 5);
        setFullness(fullness + f );
        setMsg("It I love! Great this was. Yrsssss.")
        setImg("https://media1.tenor.com/images/1a04a1bd2c34a2c97037b28047bf8af5/tenor.gif?itemid=16052875")
      
      }
    }
  }
    
    const handlePlay = (e) => {
      e.preventDefault();
      if(energy < 5){
        setEnergy(energy);
        setHappiness(happiness);
        setMsg("You trying to kill me are? hrrmm")
        setImg("https://media3.giphy.com/media/RH1NoooTMZGyY81jGI/100.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=100.webp")
      }else{
        let chance = Math.floor(Math.random() * 5);
        if (chance === 1){
          setEnergy( energy - 5);
          setHappiness(happiness - 5);
          setMsg("I hates this please change the game.")
          setImg("https://media3.giphy.com/media/RH1NoooTMZGyY81jGI/100.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=100.webp")
          
        }else{
          let x = Math.floor(Math.random() * 10);
          setEnergy( energy - 5);
          setMsg("Having fun Yoda is.")
          setImg("https://media3.giphy.com/media/H3x6vmjuvJ4fxIQDko/giphy.webp?cid=ecf05e47fbcc2efcb16dbbcf66ddb43a6b631235f6189888&rid=giphy.webp")
          // alert();
          setHappiness(happiness + x);
        }
      }
  }
  const handleSleep = (e) => {
    e.preventDefault();
    if(happiness<=0 || fullness<=0){
      setHappiness(happiness);
      setFullness(fullness);
      setMsg("You killed me, loser");
      setImg("https://media1.giphy.com/media/Ken6Yg5n7bYStW4JYB/200w.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=200w.webp");
      // alert("You killed me, loser!!!");
    }
    else{
      setEnergy(energy + 15);
      setFullness(fullness - 5);
      setHappiness(happiness - 5);
      setMsg("Was a nice sleep. hrmm!!")
      setImg("https://media1.tenor.com/images/a80b0bb71ac88114d5d6c704ccb9df94/tenor.gif?itemid=16072547")

    }
    
}
  const handleWork = (e) => {
    e.preventDefault();
    if(energy < 5){
      setEnergy(energy);
      setMsg("Yoda cannot work at the moment.")
      setImg("https://media0.giphy.com/media/ejE65T2SVhvm6JICsS/100.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=100.webp")

    }else{
    setEnergy(energy - 5);
    let chance = Math.floor(Math.random() * (3 -1) + 1);
    setMeal(meal + chance);
    setMsg("Food Money yes! This does Yoda loves.")
    setImg("https://media.giphy.com/media/kI2hsMDS4zjK7Fbif8/giphy.gif")
    }
  }
  const Restart=(e)=>{
    setFullness(20);
    setEnergy(50);
    setHappiness(20);
    setMeal(3);
    
    
    }

  return (
    <div className="App">
      {
        (fullness <= 0 || happiness <= 0) ? 
          
          //          
          <input className="btn btn-outline-danger text-center" onClick={Restart} type="submit" value="Restart"/> : 
          ''
        
      }
      {
        (fullness <= 0 || happiness <= 0) ?
        <p style={{color:"red"}}>You lost press Restart button to start over</p> :
        ''
      }
      {
        (fullness >= 100 || happiness >= 100) ?
          <input className="btn btn-outline-success text-center" onClick={Restart} type="submit" value="Restart"/> : 
          ''
      }
      {
        (fullness >= 100 || happiness >= 100) ?
        <p style={{color:"green"}}>You won press Restart button to start over</p> :
        ''
      }
      
      <Datchi img = {img} eat = {eat} play = {play} sleep = {sleep} work = {work} fullness = {fullness} energy = {energy} happiness = {happiness}
              handleEat = {handleEat} handleWork = {handleWork} handleSleep = {handleSleep} handlePlay = {handlePlay} meal={meal}/>
      
      <Display 
              msg = {msg} img = {img} eat = {eat} play = {play} sleep = {sleep} work = {work} fullness = {fullness} energy = {energy}
              handleEat = {handleEat} handlePlay = {handlePlay} meal={meal} happiness={happiness} handleSleep={handleSleep} handleWork={handleWork}
      />
    </div>
  );
  }


export default App;
