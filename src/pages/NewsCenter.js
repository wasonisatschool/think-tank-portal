import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 添加 useNavigate 导入
import { getLatestNews } from '../api';
import './NewsCenter.css'; // 使用正确的路径导入 NewsCenter.css

const NewsCenter = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate(); // 添加 useNavigate 钩子

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatestNews();
      setNews(data);
    };

    fetchData();
  }, []);

  return (
    <div className="news-center">
      <h1>News Center</h1>
      <div className="news-cards">
        {news.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <button className="read-more" onClick={() => navigate(`/news/${item.id}`)}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCenter;
