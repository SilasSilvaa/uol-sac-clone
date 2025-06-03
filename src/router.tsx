import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { RecoverPassword } from "./pages/recover_password";
import { Default } from "./layout/Default";
import { Help } from "./pages/help";
import { DebtSettlement } from "./pages/debt_settlement";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route path="/" element={<Home />} />
                <Route path="/recoverpassword" element={<RecoverPassword />} />
                <Route path="/help" element={<Help />} />
                <Route path="/debt-settlment" element={<DebtSettlement />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

