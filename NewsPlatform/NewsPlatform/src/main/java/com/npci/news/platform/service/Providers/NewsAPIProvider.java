package com.npci.news.platform.service.Providers;


import java.util.List;

import com.npci.news.platform.entity.NewsArticle;

public interface NewsAPIProvider {
   public List<NewsArticle> fetchNewsByTag(String tag);
}
