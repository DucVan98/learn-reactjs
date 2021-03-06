import React from 'react';
import PropTypes from 'prop-types';

// Khai báo kiểu dữ liệu cho songList
SongList.propTypes = {
    songList: PropTypes.array,
};
// đặt giá trị mặc định cho dữ liệu bên trên
SongList.defaultProps = {
    songList:[],
}

function SongList({songList}) {
    return (
            <ul>  
                {songList.map(song => (
                    <li key={song.id}>
                        <p>Tên bài hát :{song.songName}</p>
                        <p>Tên ca sĩ : {song.singerName}</p>
                    </li>
                ))}
            </ul>
    );
}

export default SongList;
