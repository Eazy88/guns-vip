package cn.stylefeng.guns.modular.note.model.params;

import lombok.Data;
import cn.stylefeng.roses.kernel.model.validator.BaseValidatingParam;
import java.util.Date;
import java.io.Serializable;
import java.math.BigDecimal;

/**
 * <p>
 * 用户付费日记关系表
 * </p>
 *
 * @author 
 * @since 2019-11-14
 */
@Data
public class QxUserNoteParam implements Serializable, BaseValidatingParam {

    private static final long serialVersionUID = 1L;


    /**
     * 标识
     */
    private Long id;

    /**
     * 乐观锁
     */
    private Integer version;

    /**
     * 创建人
     */
    private Long createdBy;

    /**
     * 创建时间
     */
    private Date createdTime;

    /**
     * 更新人
     */
    private Long updatedBy;

    /**
     * 更新时间
     */
    private Date updatedTime;

    /**
     * 删除标识
     */
    private String deleted;

    /**
     * 付费用户
     */
    private Long userId;

    /**
     * 私密日记ID
     */
    private Long noteId;

    @Override
    public String checkParam() {
        return null;
    }

}
