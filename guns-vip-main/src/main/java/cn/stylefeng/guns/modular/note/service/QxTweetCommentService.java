package cn.stylefeng.guns.modular.note.service;

import cn.stylefeng.guns.base.pojo.page.LayuiPageInfo;
import cn.stylefeng.guns.modular.note.dto.QxTweetCommentTo;
import cn.stylefeng.guns.modular.note.entity.QxTweetComment;
import cn.stylefeng.guns.modular.note.model.params.QxTweetCommentParam;
import cn.stylefeng.guns.modular.note.model.result.QxTweetCommentResult;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 推文评论表 服务类
 * </p>
 *
 * @author 
 * @since 2019-11-18
 */
public interface QxTweetCommentService extends IService<QxTweetComment> {

    /**
     * 新增
     *
     * @author 
     * @Date 2019-11-18
     */
    void add(QxTweetCommentParam param);

    /**
     * 删除
     *
     * @author 
     * @Date 2019-11-18
     */
    void delete(QxTweetCommentParam param);

    /**
     * 更新
     *
     * @author 
     * @Date 2019-11-18
     */
    void update(QxTweetCommentParam param);

    /**
     * 查询单条数据，Specification模式
     *
     * @author 
     * @Date 2019-11-18
     */
    QxTweetCommentResult findBySpec(QxTweetCommentParam param);

    /**
     * 查询列表，Specification模式
     *
     * @author 
     * @Date 2019-11-18
     */
    List<QxTweetCommentResult> findListBySpec(QxTweetCommentParam param);

    /**
     * 查询分页数据，Specification模式
     *
     * @author 
     * @Date 2019-11-18
     */
     LayuiPageInfo findPageBySpec(QxTweetCommentParam param);

     /**
      * 添加推文评价
      * @param requestUserId
      * @param commentTo
      */
	 void addComment(Long requestUserId, QxTweetCommentTo commentTo);

}
