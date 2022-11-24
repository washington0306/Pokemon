const hover3D = (pageX, pageY, config, ref, setRotate3d) => {
  const { width, height, rotation } = config,
    centerX = width / 2,
    centerY = height / 2,
    offsetX = (pageX - ref.offsetLeft) / width,
    offsetY = (pageY - ref.offsetTop) / height,
    deltaX = pageX - ref.offsetLeft - centerX,
    deltaY = pageY - ref.offsetTop - centerY,
    widthMultiplier = 100 / width,
    rotateX = (deltaY - offsetY) * ((rotation / 100) * widthMultiplier),
    rotateY = (offsetX - deltaX) * ((rotation / 100) * widthMultiplier);

  setRotate3d({ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
};

export default hover3D;
