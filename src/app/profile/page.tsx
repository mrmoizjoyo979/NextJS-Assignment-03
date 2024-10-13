
import Header from "@/components/header"
import Footer from "@/components/footer"

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <div className="childContainer">
            Hey,
            <br />
            My Name is <span className="greyColor">Mr..Moiz..Joyo</span>
            <br />I am Learning Next JS
        </div>
        <div className="childContainer">
            <img className="profile"  src="/Profile.jpeg" alt="profile pic" height={200} width={200}></img>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
