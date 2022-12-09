import './LoginPage.scss'
import picture from '../../assets/images/hero-bcg.a876f19f6786a3aca992.jpeg'



export const LoginPage = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-6 left">
            <h1>Login</h1>
            <h3>If yo have account , let's login</h3>
            <button>Sign in with your Google account</button>
            <p>OR</p>
            <form >
              <input type="text" placeholder="User name" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
            <div className="forgetpasword">If you forget password :<a href="">Click here</a></div>
          </div>
          <div className="col-6">
            <div className="right">
            <img src={picture} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}