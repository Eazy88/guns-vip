layui.use(['table', 'admin', 'ax', 'func'], function () {
    var $ = layui.$;
    var table = layui.table;
    var $ax = layui.ax;
    var admin = layui.admin;
    var func = layui.func;

    /**
     * 用户付费日记关系表管理
     */
    var QxUserNote = {
        tableId: "qxUserNoteTable"
    };

    /**
     * 初始化表格的列
     */
    QxUserNote.initColumn = function () {
        return [[
            {type: 'checkbox'},
            {field: 'id', hide: true, title: '标识'},
            {field: 'version', sort: true, title: '乐观锁'},
            {field: 'createdBy', sort: true, title: '创建人'},
            {field: 'createdTime', sort: true, title: '创建时间'},
            {field: 'updatedBy', sort: true, title: '更新人'},
            {field: 'updatedTime', sort: true, title: '更新时间'},
            {field: 'deleted', sort: true, title: '删除标识'},
            {field: 'userId', sort: true, title: '付费用户'},
            {field: 'noteId', sort: true, title: '私密日记ID'},
            {align: 'center', toolbar: '#tableBar', title: '操作'}
        ]];
    };

    /**
     * 点击查询按钮
     */
    QxUserNote.search = function () {
        var queryData = {};
        queryData['condition'] = $("#condition").val();
        table.reload(QxUserNote.tableId, {
            where: queryData, page: {curr: 1}
        });
    };

    /**
     * 弹出添加对话框
     */
    QxUserNote.openAddDlg = function () {
        func.open({
            title: '添加用户付费日记关系表',
            content: Feng.ctxPath + '/qxUserNote/add',
            tableId: QxUserNote.tableId
        });
    };

    /**
    * 点击编辑
    *
    * @param data 点击按钮时候的行数据
    */
    QxUserNote.openEditDlg = function (data) {
        func.open({
            title: '修改用户付费日记关系表',
            content: Feng.ctxPath + '/qxUserNote/edit?id=' + data.id,
            tableId: QxUserNote.tableId
        });
    };

    /**
     * 导出excel按钮
     */
    QxUserNote.exportExcel = function () {
        var checkRows = table.checkStatus(QxUserNote.tableId);
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
    QxUserNote.onDeleteItem = function (data) {
        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/qxUserNote/delete", function (data) {
                Feng.success("删除成功!");
                table.reload(QxUserNote.tableId);
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
        elem: '#' + QxUserNote.tableId,
        url: Feng.ctxPath + '/qxUserNote/list',
        page: true,
        height: "full-158",
        cellMinWidth: 100,
        cols: QxUserNote.initColumn()
    });

    // 搜索按钮点击事件
    $('#btnSearch').click(function () {
        QxUserNote.search();
    });

    // 添加按钮点击事件
    $('#btnAdd').click(function () {
        QxUserNote.openAddDlg();
    });

    // 导出excel
    $('#btnExp').click(function () {
        QxUserNote.exportExcel();
    });

    // 工具条点击事件
    table.on('tool(' + QxUserNote.tableId + ')', function (obj) {
        var data = obj.data;
        var layEvent = obj.event;

        if (layEvent === 'edit') {
            QxUserNote.openEditDlg(data);
        } else if (layEvent === 'delete') {
            QxUserNote.onDeleteItem(data);
        }
    });
});
