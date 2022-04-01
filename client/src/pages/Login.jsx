// import Google from "../img/google.png";
// import Facebook from "../img/facebook.png";
// import Github from "../img/github.png";

const Login = () => {
  const google = () => {
     window.open("https://temp-app-babli.herokuapp.com/auth/google", "_self");
    // window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("https://temp-app-babli.herokuapp.com/auth/github", "_self");
    // window.open("https://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    // window.open("https://ganna-app.herokuapp.com/", "_self");
    // window.open("https://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng%2F20181117%2Ffacebook-logo-icon-png_241252.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Ffacebook&tbnid=ZiZI20cVkC_4xM&vet=12ahUKEwiNk-_ywvD2AhWXYmwGHQBZC8IQMygHegUIARDoAQ..i&docid=s171Vynh5PaKHM&w=360&h=360&q=facebook%20image%20download&ved=2ahUKEwiNk-_ywvD2AhWXYmwGHQBZC8IQMygHegUIARDoAQ"} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng%2F20181117%2Ffacebook-logo-icon-png_241252.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Ffacebook&tbnid=ZiZI20cVkC_4xM&vet=12ahUKEwiNk-_ywvD2AhWXYmwGHQBZC8IQMygHegUIARDoAQ..i&docid=s171Vynh5PaKHM&w=360&h=360&q=facebook%20image%20download&ved=2ahUKEwiNk-_ywvD2AhWXYmwGHQBZC8IQMygHegUIARDoAQ"} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng%2F20181117%2Ffacebook-logo-icon-png_241252.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Ffacebook&tbnid=ZiZI20cVkC_4xM&vet=12ahUKEwiNk-_ywvD2AhWXYmwGHQBZC8IQMygHegUIARDoAQ..i&docid=s171Vynh5PaKHM&w=360&h=360&q=facebook%20image%20download&ved=2ahUKEwiNk-_ywvD2AhWXYmwGHQBZC8IQMygHegUIARDoAQ"} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;