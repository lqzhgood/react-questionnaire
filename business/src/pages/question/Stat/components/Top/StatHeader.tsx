import React, { useMemo, useRef } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, InputRef, Popover, Space, Tooltip, Typography, message } from 'antd';
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from '@ant-design/icons';

import QRCode from 'qrcode.react';
import useGetQuestionPageInfo from '@/hooks/useGetQuestionPageInfo';
import styles from './StatHeader.module.sass';
import { BASE_URL } from '@/const/web';

const { Title } = Typography;

const StatHeader = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const { title, isPublished } = useGetQuestionPageInfo();

    const urlInputRef = useRef<InputRef>(null);

    function copy() {
        const elm = urlInputRef.current;
        if (!elm) return null;
        elm.select();
        // eslint-disable-next-line
        const text = elm.input?.value || '';
        navigator.clipboard.writeText('https://github.com/lqzhgood/react-questionnaire');
        // navigator.clipboard.writeText(text);
        message.success(`复制成功`);
        message.success(`C 端在 customer 项目，并未一起打包，无法访问`);
    }

    const LinkAndQRCodeElm = useMemo(() => {
        if (!isPublished) return null;

        const url = window.location.origin + BASE_URL + `/question/${id}`;

        return (
            <Space>
                <Input style={{ width: '300px' }} value={url} ref={urlInputRef} />
                <Tooltip title='复制链接'>
                    <Button icon={<CopyOutlined />} onClick={copy} />
                </Tooltip>
                <Popover content={<QRCode value={url} size={150} />}>
                    <Button icon={<QrcodeOutlined />}></Button>
                </Popover>
            </Space>
        );
    }, [id, isPublished]);

    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type='link' icon={<LeftOutlined />} onClick={() => nav(-1)}>
                            返回
                        </Button>
                        <Title>{title}</Title>
                    </Space>
                </div>
                <div className={styles.main}>{LinkAndQRCodeElm}</div>
                <div className={styles.right}>
                    <Button type='primary' onClick={() => nav(`/question/edit/${id}`)}>
                        编辑问卷
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StatHeader;
