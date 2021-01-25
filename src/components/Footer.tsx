import React from "react";

interface IProps {
  brand: string;
}

const Footer: React.FC<IProps> = ({ brand }) => {
  return (
    <div className="footer-crawl">
      <div className="text-muted-crawl">
        Todos os direitos reservados a ©{brand}
      </div>
    </div>
  );
};

export default Footer;
