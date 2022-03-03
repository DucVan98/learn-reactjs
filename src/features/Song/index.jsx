import React from 'react';
import PropTypes from 'prop-types';
import SongList from './compoments/SongList';

SongFeature.propTypes = {
    
};

// Bước 1 : lấy API hoặc khai báo dữ liệu trong function
// Bước 2: chuyển vào file index.jsx trong SongList để tiến hành
// render dữ liệu
// Bước 3 : Khai báo hàm SongFeature theo dạng jsx ra file app.js
function SongFeature(props) {
    const songList = [
        {
            id : 1,
            songName : 'Hôm nay chúng ta thuộc về nhau',
            singerName : 'Sett'
        },
        {
            id : 2,
            songName : 'David song',
            singerName : 'david'
        },
        {
            id : 3,
            songName : 'Anie code',
            singerName : 'anie'
        }
    ]
    return (
        <div>
            {/* gửi dữ liệu của mảng hay API vào compoments để render dữ liệu */}
            <SongList songList={songList}/>
        </div>
    );
}

export default SongFeature;