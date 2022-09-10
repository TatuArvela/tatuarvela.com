import { useTranslation } from "i18n";

import CloseButton from "./CloseButton";
import Form from "./form/Form";
import SubmitButton from "./form/SubmitButton";
import TextArea from "./form/TextArea";
import TextField from "./form/TextField";
import ModalWrapper from "./ModalWrapper";

const FORM_HEIGHT = "594px";
const DOG_EAR_SIZE = "3rem";

type ContactFormProps = {
  close(): void;
  toggled: boolean;
};

const ContactForm = ({ close, toggled }: ContactFormProps) => {
  const { t } = useTranslation();

  return (
    <ModalWrapper toggled={toggled} height={FORM_HEIGHT} aria-hidden={!toggled}>
      <Form
        toggled={toggled}
        method="POST"
        action="https://formspree.io/%63%6F%6E%74%61%63%74@%74%61%74%75%61%72%76%65%6C%61%2E%63%6F%6D"
        height={FORM_HEIGHT}
        dogEarSize={DOG_EAR_SIZE}
      >
        <CloseButton onClick={close} size={DOG_EAR_SIZE} />
        <h2>{t("contact.title")}</h2>
        <TextField id="name" label={t("contact.name")} required />
        <TextField id="email" label={t("contact.email")} required />
        <TextArea id="message" label={t("contact.message")} rows="8" required />
        <SubmitButton>{t("contact.send")}</SubmitButton>
      </Form>
    </ModalWrapper>
  );
};

export default ContactForm;
