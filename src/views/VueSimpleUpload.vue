<template>
    <div>
        <el-row style="background-color: azure">
            <el-form ref="sel" :model="selParam" label-width="80px" size="mini" inline>
                <el-form-item label="文件名称" prop="fileName">
                    <el-input v-model="selParam.fileName" placeholder="请输入文件名称" clearable></el-input>
                </el-form-item>
                <el-form-item label="文件别名" prop="fileShowName">
                    <el-input v-model="selParam.fileShowName" placeholder="请输入文件别名" clearable></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="fileType">
                    <el-select v-model="selParam.fileType" prop="fileType" clearable>
                        <el-option v-for="item in fileType" :key="item.codeNo" :value="item.codeName"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleUploadBtn">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleUploadBtn">上传文件</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleDownloadBtn">资料下载</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-divider></el-divider>

        <el-table :data="resultParam" border style="width: 100%" size="mini">
            <el-table-column prop="fileName" label="文件名称"></el-table-column>
            <el-table-column prop="fileShowName" label="显示名称"></el-table-column>
            <el-table-column prop="size" label="文件大小"></el-table-column>
            <el-table-column prop="uploadDate" label="上传日期"></el-table-column>
            F
            <el-table-column prop="uploadUser" label="上传人"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column label="操作">
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
                <el-button type="success" size="mini">下载</el-button>
            </el-table-column>

        </el-table>

        <el-dialog title="文件上传" :visible.sync="uploadWindowVisible" width="670px" :close-on-click-modal="false"
                   @close="handleDialogClose">
            <el-form ref="upload" :model="param" label-width="80px" size="mini" :rules="paramRules">
                <el-form-item label="文件名称" prop="fileName">
                    <el-input :disabled="true" v-model="param.fileName"></el-input>
                </el-form-item>
                <el-form-item label="文件别名" prop="fileShowName">
                    <el-input v-model="param.fileShowName" placeholder="请输入文件别名"></el-input>
                </el-form-item>
                <el-form-item label="文件分类" prop="fileType">
                    <el-select v-model="param.fileType" style="width: 550px;">
                        <el-option v-for="item in fileType" :key="item.codeNo" :value="item.codeName"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上傳文件">
                    <uploader :options="options" class="uploader-example" @file-added="fileAdded"
                              @file-removed="fileRemoved" :autoStart="false" :file-status-text="statusText"
                              ref="uploader" @file-success="fileSuccess">
                        <uploader-unsupport></uploader-unsupport>
                        <uploader-drop>
                            <p>Drop files here to upload or</p>
                            <uploader-btn>select files</uploader-btn>
                        </uploader-drop>
                        <uploader-list></uploader-list>
                    </uploader>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="uploadCommit" size="mini">提交</el-button>
                    <el-button @click="uploadCancel" size="mini">取消</el-button>
                    <el-button @click="testUploader" size="mini">测试</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!--资料下载-->
        <el-dialog title="资料下载" :visible.sync="downloadWindowVisible" width="900px" :close-on-click-modal="false"
                   @close="handleDownloadDialog">
            <el-table :data="resultParam" ref="downloadDialog" row-key="id" border style="width: 100%" size="mini"
                      stripe
                      :tree-props="{children: 'children', hasChildren: 'hasChildren'}" max-height="600px"
                      highlight-current-row>
                <el-table-column prop="fileShowName" label="文件名称"></el-table-column>
                <el-table-column prop="size" label="文件大小"></el-table-column>
                <el-table-column prop="uploadDate" label="上传日期"></el-table-column>
                <el-table-column prop="remark" label="备注"></el-table-column>
                <el-table-column label="操作" width="80px">
                    <template slot-scope="scope">
                        <el-button type="success" size="mini" @click="handleDownload(scope.row)" v-show="scope.row.size">下载</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "VueSimpleUpload",
        data() {
            return {
                options: {
                    target: '//localhost:8001/api/file/uploadFile', // '//jsonplaceholder.typicode.com/posts/',
                    testChunks: false
                },
                fileName: '',//上传成功后，文件的名字
                uploader: {},
                statusText: {
                    success: '成功了',
                    error: '出错了',
                    uploading: '上传中',
                    paused: '暂停中',
                    waiting: '等待中'
                },
                resultParam: [
                    {
                        id: "01",
                        fileShowName: "政府相关",
                        children: [
                            {
                                id: "1001",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1002",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1003",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1004",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1005",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1006",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1007",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1008",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1009",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                            {
                                id: "1010",
                                fileShowName: "政府相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "政府相关的备注信息"
                            },
                        ]
                    },
                    {
                        id: "02", fileShowName: "系统维护", children: [
                            {
                                id: "2001",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2002",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2003",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2004",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2005",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2006",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2007",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2008",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2009",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                            {
                                id: "2010",
                                fileShowName: "系统维护的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "系统维护的备注信息"
                            },
                        ]
                    },
                    {
                        id: "03", fileShowName: "银行相关", children: [
                            {
                                id: "3001",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3002",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3003",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3004",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3005",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3006",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3007",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3008",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3009",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                            {
                                id: "3010",
                                fileShowName: "银行相关的下载文件",
                                size: "10240",
                                uploadDate: "2020-10-25 15:46:46",
                                remark: "银行相关的备注信息"
                            },
                        ]
                    }
                ],
                selParam: {
                    fileName: '',
                    fileShowName: '',
                    fileType: '',
                },
                param: {
                    fileName: '',
                    fileShowName: '',
                    fileType: '',
                },
                uploadWindowVisible: false,
                downloadWindowVisible: false,
                fileType: [
                    {codeNo: '01', codeName: '政府相关'},
                    {codeNo: '02', codeName: '系统维护'},
                    {codeNo: '03', codeName: '银行相关'}
                ],
                paramRules: {
                    fileShowName: [{required: true, message: '请输入文件显示名称', trigger: 'blur'}],
                    fileType: [{required: true, message: '请至少选择一个分类', trigger: 'change'}]
                }
            }
        },
        mounted() {
            this.setStyle();
        },
        methods: {
            handleDownload(row) {
                console.log(row);

            },
            handleDownloadBtn() {
                this.downloadWindowVisible = true;
            },
            handleUploadBtn() {
                this.uploadWindowVisible = true;
            },
            handleDialogClose() {
                this.uploadWindowVisible = false;
                this.$refs.uploader.fileList = [];//当窗口关闭或者取消后，删除上传的文件列表，并且删除ftp的文件(根据名字删除，名字this.fileName)
                this.$refs.upload.resetFields();
            },
            handleDownloadDialog() {
                let data = this.$refs.downloadDialog;
                // for(var i=0;i<this.$refs.downloadDialog.store._getAllNodes().length;i++){
                //     this.$refs.downloadDialog.store._getAllNodes()[i].expanded=false;
                // }


            },
            uploadCancel() {
                this.handleDialogClose();
            },
            uploadCommit() {
                this.$refs.upload.resetFields();
            },
            setStyle() {
                setTimeout(() => {
                    let elementsByClassName = document.getElementsByClassName("el-form-item");
                    for (let i = 0; i < elementsByClassName.length; i++) {
                        elementsByClassName[i].style.cssText = elementsByClassName[i].style.cssText + "position: relative;top: 8px;"
                    }
                }, 60)
            },
            //添加文件时
            fileAdded(file) {
                console.log(`添加文件  ${file}`);
            },
            //移除文件
            fileRemoved(file) {
                console.log(`移除文件  ${file}`);
            },
            //上传成功的事件
            fileSuccess(rootFile, file, message, chunk) {
                this.fileName = message;
            },
            testUploader() {
                console.log(this.$refs.uploader);
            }
        }
        ,
        watch: {}
    }
</script>

<style scoped>
    .uploader-example {
        width: 520px;
        padding: 15px;
        font-size: 12px;
        box-shadow: 0 0 2px rgba(0, 0, 0, .4);
    }

    .uploader-example .uploader-btn {
        margin-right: 4px;
    }

    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .success-row {
        background: #f0f9eb;
    }
</style>