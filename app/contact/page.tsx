import FormBar from "../components/contact/form-bar";
import SnsIcon from "../components/contact/sns-icon";
import FAQArea from "../components/FAQ-area";

const page = () => {
  return (
    <>
      <FormBar
        title="参加方法"
        subtitle="参加フォーム"
        src="404"
        description="参加フォームを回答後、メールアドレス宛にdiscordの招待リンクを送信します"
      />
      <FormBar
        title="お問い合わせ"
        subtitle="お問い合わせフォーム"
        src="/404"
        description="気になることや、企業様からのお問い合わせはこちらです"
      />
      <FAQArea />
      <SnsIcon />
    </>
  );
};

export default page;
