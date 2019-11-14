layui.use(['table', 'admin', 'ax', 'func'], function () {
    var $ = layui.$;
    var table = layui.table;
    var $ax = layui.ax;
    var admin = layui.admin;
    var func = layui.func;

    /**
     * 建议反馈表管理
     */
    var QxFeedback = {
        tableId: "qxFeedbackTable"
    };

    /**
     * 初始化表格的列
     */
    QxFeedback.initColumn = function () {
        return [[
            {type: 'checkbox'},
            {field: 'id', hide: true, title: '标识'},
            {field: 'version', sort: true, title: '乐观锁'},
            {field: 'createdBy', sort: true, title: '创建人'},
            {field: 'createdTime', sort: true, title: '创建时间'},
            {field: 'updatedBy', sort: true, title: '更新人'},
            {field: 'updatedTime', sort: true, title: '更新时间'},
            {field: 'deleted', sort: true, title: '删除标识'},
            {field: 'userId', sort: true, title: '用户ID'},
            {field: 'type', sort: true, title: '意见类型'},
            {field: 'content', sort: true, title: '反馈详情'},
            {field: 'status', sort: true, title: '状态 0-未处理；1-已处理'},
            {align: 'center', toolbar: '#tableBar', title: '操作'}
        ]];
    };

    /**
     * 点击查询按钮
     */
    QxFeedback.search = function () {
        var queryData = {};
        queryData['condition'] = $("#condition").val();
        table.reload(QxFeedback.tableId, {
            where: queryData, page: {curr: 1}
        });
    };

    /**
     * 弹出添加对话框
     */
    QxFeedback.openAddDlg = function () {
        func.open({
            title: '添加建议反馈表',
            content: Feng.ctxPath + '/qxFeedback/add',
            tableId: QxFeedback.tableId
        });
    };

    /**
    * 点击编辑
    *
    * @param data 点击按钮时候的行数据
    */
    QxFeedback.openEditDlg = function (data) {
        func.open({
            title: '修改建议反馈表',
            content: Feng.ctxPath + '/qxFeedback/edit?id=' + data.id,
            tableId: QxFeedback.tableId
        });
    };

    /**
     * 导出excel按钮
     */
    QxFeedback.exportExcel = function () {
        var checkRows = table.checkStatus(QxFeedback.tableId);
        if (checkRows.data.length === 0) {
            Feng.error("请选择要导出的数据");
        } else {
            table.exportFile(tableResult.config.id, checkRows.data, 'xls');
        }
    };

    /**
     * 点击删除
     *
     * @param data 点击按钮时候的行数据
     */
    QxFeedback.onDeleteItem = function (data) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/qxFeedback/delete", function (data) {
                Feng.success("删除成功!");
                table.reload(QxFeedback.tableId);
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("id", data.id);
            ajax.start();
        };
        Feng.confirm("是否删除?", operation);
    };

    // 渲染表格
    var tableResult = table.render({
        elem: '#' + QxFeedback.tableId,
        url: Feng.ctxPath + '/qxFeedback/list',
        page: true,
        height: "full-158",
        cellMinWidth: 100,
        cols: QxFeedback.initColumn()
    });

    // 搜索按钮点击事件
    $('#btnSearch').click(function () {
        QxFeedback.search();
    });

    // 添加按钮点击事件
    $('#btnAdd').click(function () {
        QxFeedback.openAddDlg();
    });

    // 导出excel
    $('#btnExp').click(function () {
        QxFeedback.exportExcel();
    });

    // 工具条点击事件
    table.on('tool(' + QxFeedback.tableId + ')', function (obj) {
        var data = obj.data;
        var layEvent = obj.event;

        if (layEvent === 'edit') {
            QxFeedback.openEditDlg(data);
        } else if (layEvent === 'delete') {
            QxFeedback.onDeleteItem(data);
        }
    });
});
