package cn.stylefeng.guns.modular.note.controller;

import cn.stylefeng.guns.base.pojo.page.LayuiPageInfo;
import cn.stylefeng.guns.modular.note.entity.QxInvite;
import cn.stylefeng.guns.modular.note.model.params.QxInviteParam;
import cn.stylefeng.guns.modular.note.service.QxInviteService;
import cn.stylefeng.roses.core.base.controller.BaseController;
import cn.stylefeng.roses.core.reqres.response.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * 约单表控制器
 *
 * @author 
 * @Date 2019-11-14 13:32:52
 */
@Controller
@RequestMapping("/qxInvite")
public class QxInviteController extends BaseController {

    private String PREFIX = "/note/qxInvite";

    @Autowired
    private QxInviteService qxInviteService;

    /**
     * 跳转到主页面
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "/qxInvite.html";
    }

    /**
     * 新增页面
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("/add")
    public String add() {
        return PREFIX + "/qxInvite_add.html";
    }

    /**
     * 编辑页面
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("/edit")
    public String edit() {
        return PREFIX + "/qxInvite_edit.html";
    }

    /**
     * 新增接口
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("/addItem")
    @ResponseBody
    public ResponseData addItem(QxInviteParam qxInviteParam) {
        this.qxInviteService.add(qxInviteParam);
        return ResponseData.success();
    }

    /**
     * 编辑接口
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("/editItem")
    @ResponseBody
    public ResponseData editItem(QxInviteParam qxInviteParam) {
        this.qxInviteService.update(qxInviteParam);
        return ResponseData.success();
    }

    /**
     * 删除接口
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("/delete")
    @ResponseBody
    public ResponseData delete(QxInviteParam qxInviteParam) {
        this.qxInviteService.delete(qxInviteParam);
        return ResponseData.success();
    }

    /**
     * 查看详情接口
     *
     * @author 
     * @Date 2019-11-14
     */
    @RequestMapping("/detail")
    @ResponseBody
    public ResponseData detail(QxInviteParam qxInviteParam) {
        QxInvite detail = this.qxInviteService.getById(qxInviteParam.getId());
        return ResponseData.success(detail);
    }

    /**
     * 查询列表
     *
     * @author 
     * @Date 2019-11-14
     */
    @ResponseBody
    @RequestMapping("/list")
    public LayuiPageInfo list(QxInviteParam qxInviteParam) {
        return this.qxInviteService.findPageBySpec(qxInviteParam);
    }

}


