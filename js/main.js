!function(t){function i(){const i=t(".navbar-main .navbar-start").outerWidth()+t(".navbar-main .navbar-end").outerWidth();t(document).outerWidth()<i?t(".navbar-main .navbar-menu").addClass("is-flex-start"):t(".navbar-main .navbar-menu").removeClass("is-flex-start")}if(t('.article img:not(".not-gallery-item")').each(function(){0===t(this).parent("a").length&&(t(this).wrap('<a class="gallery-item" href="'+t(this).attr("src")+'"></a>'),this.alt&&t(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">'+this.alt+"</div>"))}),"function"==typeof moment&&t(".article-meta time").each(function(){t(this).text(moment(t(this).attr("datetime")).fromNow())}),t(".article > .content > table").each(function(){t(this).width()>t(this).parent().width()&&t(this).wrap('<div class="table-overflow"></div>')}),i(),t(window).resize(i),t("figure.highlight table").wrap('<div class="highlight-body">'),"undefined"!=typeof IcarusThemeSettings&&void 0!==IcarusThemeSettings.article&&void 0!==IcarusThemeSettings.article.highlight){t("figure.highlight").addClass("hljs"),t("figure.highlight .code .line span").each(function(){const i=t(this).attr("class").split(/\s+/);1===i.length&&(t(this).addClass("hljs-"+i[0]),t(this).removeClass(i[0]))}),"undefined"!=typeof ClipboardJS&&IcarusThemeSettings.article.highlight.clipboard&&(t("figure.highlight").each(function(){var i="code-"+Date.now()+(1e3*Math.random()|0),e='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+i+' .code"><i class="fas fa-copy"></i></a>';t(this).attr("id",i),t(this).find("figcaption").length?t(this).find("figcaption").prepend(e):t(this).prepend("<figcaption>"+e+"</figcaption>")}),new ClipboardJS(".highlight .copy"));var e=IcarusThemeSettings.article.highlight.fold;if(e.trim()){var a='<span class="fold">'+("unfolded"===e?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>";function n(i,e){var a=t(i).find(".fold i");e?t(i).addClass("folded"):t(i).removeClass("folded"),e?a.removeClass("fa-angle-down"):a.removeClass("fa-angle-right"),e?a.addClass("fa-angle-right"):a.addClass("fa-angle-down")}t("figure.highlight").each(function(){t(this).find("figcaption").length?t(this).find("figcaption").prepend(a):t(this).prepend("<figcaption>"+a+"</figcaption>")}),t("figure.highlight").each(function(){n(this,"folded"===e)}),t("figure.highlight figcaption .fold").click(function(){var i=t(this).closest("figure.highlight");n(i.eq(0),!i.hasClass("folded"))})}}var s=t("#toc");if(s.length>0){var r=t("<div>");function h(){s.toggleClass("is-active"),r.toggleClass("is-active")}r.attr("id","toc-mask"),t("body").append(r),s.on("click",h),r.on("click",h),t(".navbar-main .catalogue").on("click",h)}"undefined"!=typeof IcarusThemeSettings&&void 0!==IcarusThemeSettings.site.url&&void 0!==IcarusThemeSettings.site.external_link&&IcarusThemeSettings.site.external_link.enable&&t(".article .content a").filter(function(i,e){return e.href&&!t(e).attr("href").startsWith("#")&&0===e.classList.length&&function(t,i,e){try{i=new URL(i).hostname}catch(t){}if(!i)return!1;const a=new URL(t,"http://"+i);if("null"===a.origin)return!1;const n=a.hostname;if(e&&(e=Array.isArray(e)?e:[e])&&e.length)for(const t of e)if(n===t)return!1;return n!==i}(e.href,IcarusThemeSettings.site.url,IcarusThemeSettings.site.external_link.exclude)}).each(function(t,i){i.relList.add("noopener"),i.target="_blank"})}(jQuery);