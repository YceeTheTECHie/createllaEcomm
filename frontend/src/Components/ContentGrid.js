import Ads from './Ads'
import '../App.css'
import Face from './Face'
import Loader from './Loader'
import Advert from './Advert'
import LastResult from './LastResult'
const ContentGrid = ({ value, action, condition }) =>
    (
        <div class="body">
                <div class="row">
                {value.map((val,i)=>
                        (!(i%20)&&i!==0)?
                        <Advert value={val}
                                key={i}/>
                        :
                        <Face key={i} face= {val.face} price={val.price} date={val.date} size={val.size}/>
                        )}        
                </div>
                        <Loader action={action} />
                        <LastResult condition = {condition}/>
        </div>
    );




export default ContentGrid;