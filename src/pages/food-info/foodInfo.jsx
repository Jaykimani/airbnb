import React,{useState , useEffect} from "react";
import './foodInfo.css';
import { CountContext } from "../../context/context";
import { useContext } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';


function FoodInfo() {
        const {state, dispatch} = useContext(CountContext);
        const [basketConfirm, setBasketConfirm] = useState(false);
        let [foodCount, setFoodCount] = useState(1);
        let [foodAmount, setFoodAmount] = useState(state.foodSelected?.price + 200);
        const [coleslaw, setColeslaw] = useState(false);
        const [kachumbari, setKachumbari] = useState(false);
        const [sidings, setSidings] = useState([]);

      

        useEffect(()=>{

            if (coleslaw) {
              setFoodAmount(foodAmount += state.foodSelected.siding?.[0][1]);
              setSidings([...sidings, "Coleslaw"])
            }else{
              setFoodAmount(foodAmount -= state.foodSelected.siding?.[0][1]);
              let coleslawRemove = sidings.filter((item)=>{
               return item !== "Coleslaw"
              });
      
              setSidings(coleslawRemove)
       
            }
      
      
          }, [coleslaw]);
      
          useEffect(()=>{
            if (kachumbari) {
              setFoodAmount(foodAmount += state.foodSelected.siding?.[1][1]);
              setSidings([...sidings, "Kachumbari"])
            }else{
              setFoodAmount(foodAmount -= state.foodSelected.siding?.[1][1]);
              let kachumbariRemove = sidings.filter((item)=>{
                return item !== "Kachumbari"
               });
       
               setSidings(kachumbariRemove)
        
       
            }
      
          },[kachumbari])
          


         const handleColeslaw = ()=>{
               setColeslaw(!coleslaw);
             }
             const handleKachumbari = ()=>{
               setKachumbari(!kachumbari);
             }
             
             const handleAddFoodCount = ()=>{
               setFoodCount(foodCount += 1);
             }
             const handleLessFoodCount = ()=>{
               setFoodCount(foodCount -= 1);
             }
       
       
             const handleAddBasket = ()=>{
               const itemOrder = {
                   id: state.foodSelected.id,
                   image: state.foodSelected.image,
                   name : state.foodSelected.name,
                   siding: sidings,
                   price: foodAmount,
                   number: foodCount, 
               }
               dispatch({type: "edit-basket", payload: itemOrder});
               setBasketConfirm(true);
               setTimeout(() => {
                 setColeslaw(false);
                 setKachumbari(false);
                 setFoodCount(1);
                 setBasketConfirm(false)
                  
               }, 1000);
               
             }
             const handleCancelItem = ()=>{
             }
        



    return (
        <>
        <div className="item-information">
            <img src="images/burger.jpg" alt="" srcset="" />
            <h3>{state.foodSelected.name}</h3>
            <p>Ksh <span className="price">{foodAmount}/=</span></p>
            <h4>Choose your side</h4>
            <div className="side-selector">
                <p>{state.foodSelected.siding?.[0][0]}({state.foodSelected.siding?.[0][1]}/=)</p>
                <AddCircleIcon fontSize="large" onClick={handleColeslaw} style={{transform : `${coleslaw ? `rotate(45deg)` : `rotate(0deg)`}`}}/>
            </div>
            <div className="side-selector">
                <p>{state.foodSelected.siding?.[1][0]}({state.foodSelected.siding?.[1][1]}/=)</p>
                <AddCircleIcon fontSize="large" onClick={handleKachumbari} style={{transform : `${kachumbari ? `rotate(45deg)` : `rotate(0deg)`}`}}/>
            </div>
            <div className="amount-selector">
               <span onClick={handleLessFoodCount}>-</span>
               <span>{foodCount}</span>
               <span onClick={handleAddFoodCount}>+</span>
            </div>
            <div className="item-order" onClick={handleAddBasket}>
              <p>{basketConfirm ? "DONE!" : "ADD ORDER"}</p>
            </div>
            <div className="item-cancel" onClick={handleCancelItem}>
              <p>CANCEL</p>
            </div>
        </div>
        </>
    )
}

export default FoodInfo;