import styles from './CardLogin.module.scss';
import Image from "next/image";
import logo from "../../../../../public/assets/images/company/kurirqu_app.jpeg";
import FormLogin from '../FormLogin';
import AlertComponent from '../../atoms/AlertComponent';
import { useState } from 'react';

const CardLogin = () => {
    const [error, setError] = useState("");

    return(
        <>
            <div className="card shadow-sm my-3">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-form">
                                {error && <AlertComponent title={error} icon="fas fa-ban" style="alert-danger" />}
                                <div className="text-center">
                                    <div className="pb-5">
                                        <Image src={logo} alt="logo_login" width={310} height={110} className={styles.login_logo} />
                                    </div>
                                    <h6 className="h7 text-gray-600 mb-4">Silahkan Isi Username dan Password Anda untuk Masuk ke Sistem</h6>
                                </div>
                                <FormLogin callBack={(value: string) => setError(value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLogin;