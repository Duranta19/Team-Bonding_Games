import { Card, Space } from "antd";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col m-4 justify-center items-center">
      <Space direction="vertical" size={16}>
        <Card title="Treasure Hunt" style={{ width: 300 }} className="shadow-lg shadow-amber-400/50">
          <p>Card content</p>
          <Image
            src="/image/treasure_hunt.jpg"
            alt="Treasure Hunt"
            width={290}
            height={150} // Added required height prop
            className="object-cover rounded"
          />
        </Card>
        <Card title="Guess The Word" style={{ width: 300 }} className="shadow-lg shadow-blue-600/50">
          <p>Card content</p>
          <Image
            src="/image/guess_the_word.png"
            alt="Guess the word"
            width={290}
            height={120} // Added required height prop
            className="object-cover rounded"
          />
        </Card>
      </Space>
    </div>
  );
};

export default Page;
