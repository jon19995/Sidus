export const createHeart = async (node: HTMLElement) => {
    const heartImg = await import("../../assets/heart.svg");
    let heartContainer = document.createElement("div");
    let heart = document.createElement("img");

    const axisX = Math.floor(Math.random() * 90);
    const axisY = Math.floor(Math.random() * 90);

    const containeroPsition = `position: absolute; top: 90%; left: ${axisX}%;`;
    const containerTransition = "transition: top 1s linear;";
    const containerSize = "width: 20px; height: 20px;";
    const containerOverwlow = "overflow: hidden;";

    heartContainer.style.cssText = `${containeroPsition} ${containerTransition} ${containerSize} ${containerOverwlow}`;

    const heartBackground = `background-size: cover; background-repeat: no-repeat; background-image: url("${heartImg.default}");`;
    const heartSize = `width: 100%; height: 100%;`;

    heart.src = heartImg.default;
    heart.alt = "heart";
    heart.style.cssText = `${heartBackground} ${heartSize}`;

    heartContainer.append(heart);
    node.appendChild(heartContainer);
    setTimeout(() => (heartContainer.style.top = `${axisY}%`), 10);
};
