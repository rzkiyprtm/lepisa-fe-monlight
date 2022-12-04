import Login from "../../pages/login/index";
import { getCookies } from "cookies-next";

const withAuth = (Component) => {
  const Auth = (props) => {

    const userInfo = getCookies("token");
    const token = userInfo.token;
    // console.log(token)

    // jika user nga login arahin ke komponen login cok
    if (!token) {
      return <Login />;
    }
    // kalo user uda login arahin ke componen yg dituju
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;