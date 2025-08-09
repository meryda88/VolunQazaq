import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [comment, setComment] = useState("");

function Contact() {
    return(
        <div>
            <h2>Контакты</h2>
            <p>Контакты
Служба поддержки клиентов <br />


7405 <br />

(бесплатно с мобильного) <br />

client@monamie.kz <br />

Ежедневно с 09:00 до 21:00 <br />



Центральный офис <br />


info@monamie.kz <br />
+7 775 007 10 20 <br />
Ежедневно с 09:00 до 18:00 

<br />
Напишите нам
если у вас остались вопросы или есть предложения
</p>

    {/* <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
    />
    <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
    />
    <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Комментарий"
    /> */}
        </div>
    )
}

export default Contact