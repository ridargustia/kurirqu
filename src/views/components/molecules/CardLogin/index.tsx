import styles from './CardLogin.module.scss';
import Image from "next/image";
import logo from "../../../../../public/assets/images/company/rahn_apps.jpeg";
import FormLogin from '../FormLogin';

const CardLogin = () => {
    return(
        <>
            <div className="card shadow-sm my-3">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-form">
                                <div className="text-center">
                                    <div className="pb-4">
                                        <Image src={logo} alt="logo_login" width={180} height={180} className={styles.login_logo} />
                                    </div>
                                    <h6 className="h7 text-gray-600 mb-4">Silahkan Isi Username dan Password Anda untuk Masuk ke Sistem</h6>
                                </div>
                                <FormLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLogin;