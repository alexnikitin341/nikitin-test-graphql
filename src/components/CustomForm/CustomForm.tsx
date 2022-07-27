import { FC, useMemo } from 'react';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useFindPositionsQuery } from '../../graphqlHooks/useFindPositions';
import { useFindRelationsQuery } from '../../graphqlHooks/useFindRelations';
import CustomSelect from '../CustomSelect/CustomSelect';
import { OptionFromSelct } from '../../types/types';
import styles from './CustomForm.module.css';
import 'antd/dist/antd.css';

const api = 'http://152.228.215.94:83/api';

interface PropsCustomForm {}

enum FormFields {
  textInput = 'textInput',
  textArea = 'textArea',
  SelectCompanyRelation = 'SelectCompanyRelation',
  SelectCompanyPosition = 'SelectCompanyPosition',
}

interface FormSucces {
  [FormFields.textArea]: string;
  [FormFields.textInput]: string;
  [FormFields.SelectCompanyRelation]: string;
  [FormFields.SelectCompanyPosition]: string;
}

const CustomForm: FC<PropsCustomForm> = ({}) => {
  const { TextArea } = Input;

  const positions = useFindPositionsQuery({ endpoint: api });
  const relations = useFindRelationsQuery({ endpoint: api });

  const positionNames: OptionFromSelct[] = useMemo(
    () =>
      positions.data && positions.data.applicantIndividualCompanyPositions
        ? positions.data.applicantIndividualCompanyPositions.data.map(({ name, id }) => ({
            value: id,
            text: name,
          }))
        : [],
    [positions]
  );

  const relatiosNames: OptionFromSelct[] = useMemo(
    () =>
      relations.data && relations?.data?.applicantIndividualCompanyRelations
        ? relations.data.applicantIndividualCompanyRelations.data.map(({ name, id }) => ({
            value: id,
            text: name,
          }))
        : [],
    [positions]
  );

  const isLoading = useMemo(
    () => positionNames.length === 0 && relatiosNames.length === 0,
    [positionNames, relatiosNames]
  );

  const onFinish = (values: FormSucces) => {
    console.log('Success:', values);
  };

  if (isLoading) {
    return <Spin size='large' />;
  }

  return (
    <Form onFinish={onFinish} className={styles.form}>
      <Form.Item
        label='TextInput'
        name={FormFields.textInput}
        rules={[
          {
            min: 5,
            max: 10,
            required: true,
            message: 'TextInput is required in the range from 5 to 10 characters',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='TextArea'
        name={FormFields.textArea}
        rules={[
          {
            min: 5,
            max: 10,
            required: true,
            message: 'TextArea is required in the range from 5 to 10 characters',
          },
        ]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label={FormFields.SelectCompanyRelation}
        name={FormFields.SelectCompanyRelation}
        rules={[
          {
            required: true,
            message: 'SelectCompanyRelation is required',
          },
        ]}
      >
        <CustomSelect options={relatiosNames} />
      </Form.Item>

      <Form.Item
        label={FormFields.SelectCompanyPosition}
        name={FormFields.SelectCompanyPosition}
        rules={[
          {
            required: true,
            message: 'SelectCompanyPosition is required',
          },
        ]}
      >
        <CustomSelect options={positionNames} />
      </Form.Item>

      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default CustomForm;
