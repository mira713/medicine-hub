import { Slide } from "./Slide";
import styled from 'styled-components'
import { useState } from "react";

const data = [
    {
        title: "Nikita",
        description: "My first booking experience with 1mg was simple and hassle-free. Selected sample collection slot on their app and the technician arrived right on time in the morning. Very impressive"
    },
    {
        title: "Smriti",
        description: "I regularly get tests done for my father, who is a diabetic patient. I like the convenience of home sample collection and quick delivery of test reports on my email."

    },
    {
        title: "Chirag",
        description: "I was surprised to see the wide selection of labs and tests on 1mg. Now I can compare tests and packages based on prices and lab ratings and choose the best one for me and my family."
    }
];

export const Slider = () => {
    const [i, seti] = useState(0);

    const handlePrev = () => {
        if (i > 0) seti(i - 1);
    };

    const handleNext = () => {
        if (i < data.length - 1) seti(i + 1);
    };

    return (
        <SliderStyled>
            <div>
                <button disabled={i === 0} onClick={handlePrev}>
                    <img src="https://static.1mg.com/images/labs/slider-prev.svg" alt="img" />
                </button>
            </div>
            <div>
                <Slide mydata={data[i]} />
            </div>
            <div>
                <div>
                    <button
                        disabled={i === data.length - 1}
                        onClick={handleNext}
                    >
                        <img src="https://static.1mg.com/images/labs/slider-next.svg" alt="alt" />
                    </button>
                </div>
            </div>
        </SliderStyled>
    );
}

const SliderStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
gap: 30px;
margin: auto;
margin-top: 30px;
h3{
    color: #212121;
    font-size: 14px;
    font-weight: 700;
}
p{
    color: #757575;
    font-size: 18px;
    margin-bottom: 12px;
}
`