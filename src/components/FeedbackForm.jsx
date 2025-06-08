import { useState } from "react";

function FeedbackForm() {
    const [FeedbackForm, setFeedbackForm] = useState([]);
    const [form, setForm] = useState({
        studentName: '',
        otzyv: '',
        rating: '',
    });

    const handleAddFeedback = () => {
        const { studentName, otzyv, rating } = form;
        if (studentName && otzyv && rating) {
            setFeedbackForm([...FeedbackForm, { ...form, id: Date.now() }]);
            setForm({ studentName: '', otzyv: '', rating: '' });
           localStorage.setItem('form', JSON.stringify(FeedbackForm))
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="feedback_form">
            <h2>📢 Student Feedback App</h2>
            <div>
                <input
                    type="text"
                    name="studentName"
                    placeholder="Атыңыз"
                    value={form.studentName}
                    onChange={handleChange}
                />
                <textarea
                    name="otzyv"
                    placeholder="Пікіріңізді қалдырыңыз"
                    value={form.otzyv}
                    onChange={handleChange}
                />
                <select name="rating" value={form.rating} onChange={handleChange}>
                    <option value="">Бағалау</option>
                    <option value="1">1 - Төмен</option>
                    <option value="2">2 - Нашар</option>
                    <option value="3">3 - Орташа</option>
                    <option value="4">4 - Жақсы</option>
                    <option value="5">5 - Керемет</option>
                </select>
                <button className="btn-add" onClick={handleAddFeedback}>Жіберу</button>
            </div>
            <div className="feedback_list">
                {FeedbackForm.map((feedback) => (
                    <div className="feedback_box" key={feedback.id}>
                        <h3>{feedback.studentName}</h3>
                        <p>{feedback.otzyv}</p>
                        <p>Баға: {feedback.rating}/5</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeedbackForm;
