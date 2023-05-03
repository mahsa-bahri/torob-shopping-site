import HeaderSection from "./components/HeaderSection";
import {BsSearch} from "react-icons/bs";

const Home= ()=>{
              return(
              <>
                            <HeaderSection />
                            <div className="search">
                                          <div className="search-label">ترب</div>
                                          <div>موتور هوشمند خرید</div>
                                          <div></div>
                                          <input type="text" placeholder="نام کالا را وارد کنید" ></input>
                                         
                            </div>
               </>
              );
}
export default Home;