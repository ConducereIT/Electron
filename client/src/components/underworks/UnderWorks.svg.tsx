const UnderWorksSvg = () => {
    return (
        <div className="wheel-and-hamster mt-20"
            role="img">
            <div className="wheel"></div>
            <div className="hamster">
                <div className="hamster__body">
                    <div className="hamster__head">
                        <div className="hamster__ear"></div>
                        <div className="hamster__eye"></div>
                        <div className="hamster__nose"></div>
                    </div>
                    <div className="hamster__limb hamster__limb--fr"></div>
                    <div className="hamster__limb hamster__limb--fl"></div>
                    <div className="hamster__limb hamster__limb--br"></div>
                    <div className="hamster__limb hamster__limb--bl"></div>
                    <div className="hamster__tail"></div>
                </div>
            </div>
            <div className="spoke"></div>
        </div>
    );
};

export default UnderWorksSvg;