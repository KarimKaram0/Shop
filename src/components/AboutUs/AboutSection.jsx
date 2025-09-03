import "../AboutUs/AboutSection.css"
import aboutImage from "../images/AboutUs.jpg"
import "../buttons/button"
import Button from "../buttons/button"
export default function AboutSection() {
    return(
        <>

        <div className=" container vh-100 about mt-4">
                    <h1 className="text-center " style={{color:"#9561fb"}}>About Us</h1>

        <div className="row" style={{marginTop:"120px"}}>
        <div className="col-md-4 animate__animated animate__backInLeft" >
        <img class=""src={aboutImage} alt="" style={{width:"500px" , height:"100%"}} />
        </div>
        
        <div className="col-md-1"></div>

        <div className="col-md-6 animate__animated  animate__backInRight t">
        <h3 className="mb-4 fs-2 tt">About Us</h3>
        <p className="ttt" style={{lineHeight:"26px" , width:"89%"}}>Lorem,Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quos! ipsum dolor sit amet consectetur adipisicing elit. Ex dicta quisquam, recusandae nemo minus doloremque, incidunt sit ipsam sed excepturi unde molestiae expedita, soluta voluptatem fugiat voluptates cumque quod at dolorem eos inventore exercitationem ipsum dolore iusto. Expedita, porro saepe! Repellendus ipsum qui debitis obcaecati voluptatum accusamus! Fuga maxime sit cupiditate mollitia amet quam fugit provident molestiae voluptatibus commodi debitis, enim consequuntur laborum nobis. Assumenda quia et est magni officiis quasi officia cupiditate repellendus, non quaerat illo temporibus delectus eveniet itaque omnis consectetur unde, nam obcaecati distinctio, eum consequatur alias! Ratione minus inventore sapiente fugit natus nemo reiciendis impedit facere.
        </p>
        <Button />
        </div>
        </div>

        </div>
        </>
    )
}