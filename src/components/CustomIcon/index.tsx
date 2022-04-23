import Image from 'next/image';

type CustomIconProps = {
    url: string;
};

const CustomIcon = ({ url }: CustomIconProps) => {
    return <Image src={url} alt="Custom Icon" width="24px" height="24px" />;
};

export default CustomIcon;
