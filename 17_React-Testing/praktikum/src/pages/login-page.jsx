import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setLoggedInAccount } from '../store/account/current-account';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountList = useSelector((state) => state.accountList);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = (data) => {
    const { username, password } = data;

    const matchedAccount = accountList.find((user) => user.username === username && user.password === password);

    if (matchedAccount) {
      dispatch(setLoggedInAccount(matchedAccount));

      Cookies.set('username', username, { expires: 1 });
      Cookies.set('password', password, { expires: 1 });

      alert('Login berhasil!');
      navigate('/');
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="mb-4 text-center fw-bold">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <div className="text-danger">Username is required.</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <div className="text-danger">Password is required.</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
