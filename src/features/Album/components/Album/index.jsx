import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumList/index'
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
		{
			id: 1,
			name: 'Chạm x Bạn (Tập 9)',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/6/3/f/563f28098b8a4ab47b0632956bef7fbd.jpg',
		},
		{
			id: 2,
			name: 'Đúng Cũng Thành Sai',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/a/b/f/5/abf5354fb1c637f5d11986c565edc95c.jpg',
		},
		{
			id: 3,
			name: 'Anh Không Tha Thứ',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/8/4/7/e847188e9c28d0201a69fd0309afdae0.jpg',
		},
	];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;